import { css, html, LitElement } from "lit";
import {
  Profile,
  ProfilesStore,
  profilesStoreContext,
} from "@holochain-open-dev/profiles";
import { derived, joinMap, StoreSubscriber } from "@holochain-open-dev/stores";
import { AgentPubKey } from "@holochain/client";
import { sharedStyles } from "@holochain-open-dev/elements";
import { consume } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { EntryRecord, mapValues, pickBy, slice } from "@holochain-open-dev/utils";
import { localized, msg } from "@lit/localize";

import "@holochain-open-dev/profiles/dist/elements/agent-avatar.js";
import "@holochain-open-dev/profiles/dist/elements/profile-list-item-skeleton.js";
import "@holochain-open-dev/elements/dist/elements/display-error.js";

import { PeerStatusStore, Status } from "../peer-status-store.js";
import { peerStatusStoreContext } from "../context.js";
import "./avatar-with-status.js";

@localized()
@customElement("list-agents-by-status")
export class ListAgentsByStatus extends LitElement {
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

  /**
   * @internal
   */
  _profiles = new StoreSubscriber(this, () =>
    this.profilesStore.agentsProfiles(this.agents),
    () => [this.profilesStore, this.agents],
  );

  /**
   * @internal
   */
  _onlineAgents = new StoreSubscriber(this, () =>
    derived(
      joinMap(slice(this.store.agentsStatus, this.agents)),
      (agentsStatus) =>
        Array.from(
          pickBy(
            agentsStatus,
            (status, _key) => status === Status.Online
          ).keys()
        )
    ),
    () => [this.store, this.agents],
  );
  /**
   * @internal
   */
  _offlineAgents = new StoreSubscriber(this, () =>
    derived(
      joinMap(slice(this.store.agentsStatus, this.agents)),
      (agentsStatus) =>
        Array.from(
          pickBy(
            agentsStatus,
            (status, _key) => status === Status.Offline
          ).keys()
        )
    ),
    () => [this.store, this.agents],
  );

  renderOnlineAgents(
    profiles: ReadonlyMap<AgentPubKey, EntryRecord<Profile> | undefined>,
    agentPubKeys: AgentPubKey[]
  ) {
    if (agentPubKeys.length === 0)
      return html`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${msg("There are no agents online")}</span
      >`;

    return html`
      <div class="column" style="flex: 1;">
        ${agentPubKeys.map(
          (agentPubKey) => html` <div
            class="row"
            style="align-items: center; margin-top: 8px; margin-bottom: 8px"
          >
            <agent-avatar
              slot="start"
              .agentPubKey=${agentPubKey}
            ></agent-avatar>
            <span style="margin-left: 8px"
              >${profiles.get(agentPubKey)?.entry.nickname}</span
            >
          </div>`
        )}
      </div>
    `;
  }
  renderOfflineAgents(
    profiles: ReadonlyMap<AgentPubKey, EntryRecord<Profile> | undefined>,
    agentPubKeys: AgentPubKey[]
  ) {
    if (agentPubKeys.length === 0)
      return html`<span
        class="placeholder"
        style="text-align: center; padding: 16px;"
        >${msg("There are no agents offline")}</span
      >`;

    return html`
      <div class="column" style="flex: 1; opacity: 0.5;">
        ${agentPubKeys.map(
          (agentPubKey) => html` <div
            class="row"
            style="align-items: center; margin-top: 8px; margin-bottom: 8px"
          >
            <agent-avatar
              slot="start"
              .agentPubKey=${agentPubKey}
            ></agent-avatar>
            <span style="margin-left: 8px"
              >${profiles.get(agentPubKey)?.entry.nickname}</span
            >
          </div>`
        )}
      </div>
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
    switch (this._profiles.value.status) {
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
            this._profiles.value.value,
            this._onlineAgents.value
          )}
          <span class="title" style="margin-top: 8px;"
            >${msg("Offline")}${this._offlineAgents.value !== undefined
              ? ` - ${this._offlineAgents.value.length}`
              : ""}</span
          >
          ${this.renderOfflineAgents(
            this._profiles.value.value,
            this._offlineAgents.value
          )}
        `;
      case "error":
        return html`
          <display-error
            .error=${this._profiles.value.error.data.data}
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
    `,
  ];
}
