import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';
import { contextProvided } from '@lit-labs/context';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { StoreSubscriber } from 'lit-svelte-stores';
import { css, html, LitElement } from 'lit';

import { property } from 'lit/decorators.js';
import { peerStatusStoreContext } from '../context';
import { PeerStatusStore } from '../peer-status-store';
import { sharedStyles } from './utils/shared-styles';

export class PeerStatus extends ScopedElementsMixin(LitElement) {
  /** Public properties */

  /**
   * REQUIRED. The public key identifying the agent whose presence is going to be shown.
   */
  @property({
    attribute: 'agent-pub-key',
    type: String,
  })
  agentPubKey!: AgentPubKeyB64;

  /** Dependencies */

  /**
   * `PeerStatusStore` that is requested via context.
   * Only set this property if you want to override the store requested via context.
   */
  @contextProvided({ context: peerStatusStoreContext, subscribe: true })
  @property({ type: Object })
  store!: PeerStatusStore;

  private _status = new StoreSubscriber(this, () =>
    this.store.subscribeToAgentStatus(this.agentPubKey)
  );

  render() {
    return html`<div class=${this._status.value}></div>`;
  }

  static styles = [
    sharedStyles,
    css`
      .online,
      .idle,
      .offline {
        border-radius: 50%;
      }

      .online,
      .idle {
        height: 16px;
        width: 16px;
      }

      .online {
        background-color: #00ef00;
      }

      .idle {
        background-color: #dfc800;
      }

      .offline {
        height: 6px;
        width: 6px;
        border: 5px solid #7c7c7c;
      }
    `,
  ];
}