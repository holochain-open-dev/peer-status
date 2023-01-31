import { consume } from '@lit-labs/context';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { StoreSubscriber } from 'lit-svelte-stores';
import { css, html, LitElement } from 'lit';

import { property } from 'lit/decorators.js';
import { peerStatusStoreContext } from '../context';
import { PeerStatusStore } from '../peer-status-store';
import { sharedStyles } from './utils/shared-styles';
import { AgentPubKey } from '@holochain/client';

export class PeerStatus extends ScopedElementsMixin(LitElement) {
  /** Public properties */

  /**
   * REQUIRED. The public key identifying the agent whose presence is going to be shown.
   */
  @property({
    attribute: 'agent-pub-key',
    type: Object,
  })
  agentPubKey!: AgentPubKey;

  /** Dependencies */

  /**
   * `PeerStatusStore` that is requested via context.
   * Only set this property if you want to override the store requested via context.
   */
  @consume({ context: peerStatusStoreContext, subscribe: true })
  @property({ type: Object })
  store!: PeerStatusStore;

  private _status = new StoreSubscriber(this, () =>
    this.store.subscribeToAgentStatus(this.agentPubKey)
  );

  render() {
    return html`<div class="outer"><div class=${this._status.value}></div></div>`;
  }

  static styles = [
    sharedStyles,
    css`
      .outer {
        position: relative;
        height: 15px;
        width: 15px;
        background-color: #666666;
      }

      .outer,
      .online,
      .idle,
      .offline {
        border-radius: 50%;
      }

      .online,
      .idle {
        top: 2px;
        left: 2px;
        position: absolute;
        height: 11px;
        width: 11px;
      }

      .online {
        background-color: #00ef00;
      }

      .idle {
        background-color: #df8600;
      }

      .offline {
        top: 2px;
        left: 2px;
        position: relative;
        height: 5px;
        width: 5px;
        background-color: #666666;
        border: 3px solid #a7a7a7;
      }
    `,
  ];
}
