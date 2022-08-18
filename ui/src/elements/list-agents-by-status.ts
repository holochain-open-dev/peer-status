import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { css, html, LitElement } from 'lit';
import {
  AgentAvatar,
  Profile,
  ProfilesStore,
  profilesStoreContext,
} from '@holochain-open-dev/profiles';
import { SlSkeleton } from '@scoped-elements/shoelace';
import { List, ListItem } from '@scoped-elements/material-web';

import { property } from 'lit/decorators.js';
import { sharedStyles } from './utils/shared-styles';
import { PeerStatusStore, Status } from '../peer-status-store';
import { contextProvided } from '@lit-labs/context';
import { peerStatusStoreContext } from '../context';
import { StoreSubscriber, TaskSubscriber } from 'lit-svelte-stores';
import { derived } from 'svelte/store';
import { AvatarWithStatus } from './avatar-with-status';
import { AgentPubKey } from '@holochain/client';
import { HoloHashMap } from '@holochain-open-dev/utils';

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
   * `PeerStatusStore` that is requested via context.
   * Only set this property if you want to override the store requested via context.
   */
  @contextProvided({ context: peerStatusStoreContext, subscribe: true })
  @property({ type: Object })
  store!: PeerStatusStore;

  @contextProvided({ context: profilesStoreContext, subscribe: true })
  @property({ type: Object })
  profilesStore!: ProfilesStore;

  private _allProfilesTask = new TaskSubscriber(
    this,
    () => this.profilesStore.fetchAgentsProfiles(this.agents),
    () => [this.profilesStore, ...this.agents]
  );

  private _onlineAgents = new StoreSubscriber(this, () =>
    derived([this.store.subscribeToAgentsStatuses(this.agents)], ([agents]) =>
      agents.entries()
        .filter(([pubKey, status]) => status !== Status.Offline)
        .map(([pubKey, _]) => pubKey)
    )
  );

  private _offlineAgents = new StoreSubscriber(this, () =>
    derived([this.store.subscribeToAgentsStatuses(this.agents)], ([agents]) =>
      agents.entries()
        .filter(([pubKey, status]) => status === Status.Offline)
        .map(([pubKey, _]) => pubKey)
    )
  );

  renderOnlineAgents(
    profiles: HoloHashMap<AgentPubKey, Profile | undefined>,
    agentPubKeys: AgentPubKey[]
  ) {
    if (agentPubKeys.length === 0)
      return html`<span class="placeholder" style="text-align: center; padding: 16px;">There are no agents online</span>`;

    return html`
    <mwc-list style="flex: 1;">

    ${agentPubKeys.map(
      agentPubKey => html`
    <mwc-list-item graphic="avatar" noninteractive >
      <avatar-with-status slot="graphic"  .agentPubKey=${agentPubKey}></avatar-with-status>
      <span>${profiles.get(agentPubKey)?.nickname}</span>
    </mwc-list-item>`
    )}
    </mwc-list>
    `;
  }
  renderOfflineAgents(
    profiles: HoloHashMap<AgentPubKey, Profile | undefined>,
    agentPubKeys: AgentPubKey[]
  ) {
    if (agentPubKeys.length === 0)
      return html`<span class="placeholder" style="text-align: center; padding: 16px;">There are no agents offline</span>`;

    return html`
    <mwc-list style="flex: 1; opacity: 0.5;">

    ${agentPubKeys.map(
      agentPubKey => html`
    <mwc-list-item graphic="avatar" noninteractive >
      <agent-avatar slot="graphic"  .agentPubKey=${agentPubKey}></agent-avatar>
      <span>${profiles.get(agentPubKey)?.nickname}</span>
    </mwc-list-item>`
    )}
    </mwc-list>
    `;
  }

  render() {
    return html`
    <div class="column" style="flex: 1">
<span class="title">Online${
      this._onlineAgents.value !== undefined
        ? ` - ${this._onlineAgents.value.length}`
        : ''
    }</span>

${this._allProfilesTask.render({
  complete: profiles =>
    this.renderOnlineAgents(profiles, this._onlineAgents.value),
  pending: () => Array(3).map(() => html`<sl-skeleton></sl-skeleton>`),
})}

<span class="title">Offline${
      this._offlineAgents.value !== undefined
        ? ` - ${this._offlineAgents.value.length}`
        : ''
    }</span>
${this._allProfilesTask.render({
  complete: profiles =>
    this.renderOfflineAgents(profiles, this._offlineAgents.value),
  pending: () => Array(3).map(() => html`<sl-skeleton></sl-skeleton>`),
})}

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

      mwc-list-item {
        --mdc-list-item-graphic-size: 32px;
      }
    `,
  ];

  static get scopedElements() {
    return {
      'avatar-with-status': AvatarWithStatus,
      'agent-avatar': AgentAvatar,
      'sl-skeleton': SlSkeleton,
      'mwc-list': List,
      'mwc-list-item': ListItem,
    };
  }
}
