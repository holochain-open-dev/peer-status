import { css, html, LitElement } from 'lit';
import { provide } from '@lit-labs/context';
import { property } from 'lit/decorators.js';

import { peerStatusStoreContext } from '../context';
import { PeerStatusStore } from '../peer-status-store';

export class PeerStatusContext extends LitElement {
  @provide({ context: peerStatusStoreContext })
  @property({ type: Object })
  store!: PeerStatusStore;

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}
