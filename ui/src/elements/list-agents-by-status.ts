import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { css, html, LitElement } from "lit";
import {
  AgentAvatar,
  Profile,
  ProfileListItemSkeleton,
  ProfilesStore,
  profilesStoreContext,
} from "@holochain-open-dev/profiles";
import { derived, joinMap, StoreSubscriber } from "@holochain-open-dev/stores";
import { MdList, MdListItem } from "@scoped-elements/material-web";
import { AgentPubKey } from "@holochain/client";
import { DisplayError, sharedStyles } from "@holochain-open-dev/elements";
import { consume } from "@lit-labs/context";
import { property } from "lit/decorators.js";
import { mapValues, pickBy, slice } from "@holochain-open-dev/utils";
import { msg } from "@lit/localize";

import { PeerStatusStore, Status } from "../peer-status-store";
import { peerStatusStoreContext } from "../context";
import { AvatarWithStatus } from "./avatar-with-status";

export class ListAgentsByStatus extends ScopedElementsMixin(LitElement) {
  /** Public properties */

  /**
   * REQUIRED. The public keys identifying the agents whose presence is going to be shown.
   */
  @property({
    type: Array,
  })
  agents!: AgentPubKey[];

  /**
   * @internal
   */
  @consume({ context: peerStatusStoreContext, subscribe: true })
  @property({ type: Object })
  store!: PeerStatusStore;

  /**
   * @internal
   */
  @consume({ context: profilesStoreContext, subscribe: true })
  @property({ type: Object })
  profilesStore!: ProfilesStore;

  private _allProfiles = new StoreSubscriber(this, () =>
    this.profilesStore.agentsProfiles(this.agents)
  );

  private _onlineAgents = new StoreSubscriber(this, () =>
    derived(
      joinMap(slice(this.store.agentsStatus, this.agents)),
      (agentsStatus) =>
        Array.from(
          pickBy(
            agentsStatus,
            (status, _key) => status === Status.Online
          ).keys()
        )
    )
  );
  private _offlineAgents = new StoreSubscriber(this, () =>
    derived(
      joinMap(slice(this.store.agentsStatus, this.agents)),
      (agentsStatus) =>
        Array.from(
          pickBy(
            agentsStatus,
            (status, _key) => status === Status.Offline
          ).keys()
        )
    )
  );

  renderOnlineAgents(
    profiles: ReadonlyMap<AgentPubKey, Profile | undefined>,
    agentPubKeys: AgentPubKey[]
  ) {
    if (agentPubKeys.length === 0)
      return html`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${msg("There are no agents online")}</span
      >`;

    return html`
      <md-list style="flex: 1;">
        ${agentPubKeys.map(
          (agentPubKey) => html` <md-list-item
            .headline=${profiles.get(agentPubKey)?.nickname}
          >
            <avatar-with-status
              slot="start"
              .agentPubKey=${agentPubKey}
            ></avatar-with-status>
          </md-list-item>`
        )}
      </md-list>
    `;
  }
  renderOfflineAgents(
    profiles: ReadonlyMap<AgentPubKey, Profile | undefined>,
    agentPubKeys: AgentPubKey[]
  ) {
    if (agentPubKeys.length === 0)
      return html`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${msg("There are no agents offline")}</span
      >`;

    return html`
      <md-list style="flex: 1; opacity: 0.5;">
        ${agentPubKeys.map(
          (agentPubKey) => html` <md-list-item
            .headline=${profiles.get(agentPubKey)?.nickname}
          >
            <agent-avatar
              slot="start"
              .agentPubKey=${agentPubKey}
            ></agent-avatar>
          </md-list-item>`
        )}
      </md-list>
    `;
  }

  renderHeading() {
    return html`
      <span class="title"
        >${msg("Online")}${this._onlineAgents.value !== undefined
          ? ` - ${this._onlineAgents.value.length}`
          : ""}</span
      >
    `;
  }

  renderAgents() {
    switch (this._allProfiles.value.status) {
      case "pending":
        return html`<div class="column">
          ${Array(3).map(
            () =>
              html`<profile-list-item-skeleton></profile-list-item-skeleton>`
          )}
        </div> `;
      case "complete":
        return html`
          ${this.renderOnlineAgents(
            this._allProfiles.value.value,
            this._onlineAgents.value
          )}
          ${this.renderOfflineAgents(
            this._allProfiles.value.value,
            this._offlineAgents.value
          )}
        `;
      case "error":
        return html`
          <display-error
            .error=${this._allProfiles.value.error.data.data}
          ></display-error>
        `;
    }
  }

  render() {
    return html`
      <div class="column" style="flex: 1">
        ${this.renderHeading()} ${this.renderAgents()}
      </div>
    `;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: flex;
      }

      sl-skeleton {
        width: 100px;
        height: 32px;
      }
    `,
  ];

  static get scopedElements() {
    return {
      "avatar-with-status": AvatarWithStatus,
      "agent-avatar": AgentAvatar,
      "display-error": DisplayError,
      "profile-list-item-skeleton": ProfileListItemSkeleton,
      "md-list": MdList,
      "md-list-item": MdListItem,
    };
  }
}
