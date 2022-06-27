import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { css, html, LitElement } from 'lit';
import { AgentAvatar } from '@holochain-open-dev/profiles';

import { property } from 'lit/decorators.js';
import { sharedStyles } from './utils/shared-styles';
import { PeerStatus } from './peer-status';

export class AvatarWithStatus extends ScopedElementsMixin(LitElement) {
  /** Public properties */

  /**
   * REQUIRED. The public key identifying the agent whose presence is going to be shown.
   */
  @property({
    attribute: 'agent-pub-key',
    type: String,
  })
  agentPubKey!: AgentPubKeyB64;

  render() {
    return html`<agent-avatar .agentPubKey=${this.agentPubKey}>
        <peer-status .agentPubKey=${this.agentPubKey} slot="badge"></peer-status>
      </agent-avatar>`;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        display: flex;
      }
    `,
  ];

  static get scopedElements() {
    return {
      'agent-avatar': AgentAvatar,
      'peer-status': PeerStatus,
    };
  }
}
