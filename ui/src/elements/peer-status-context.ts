import { css, html, LitElement } from "lit";
import { provide } from "@lit-labs/context";
import { customElement, property } from "lit/decorators.js";

import { peerStatusStoreContext } from "../context.js";
import { PeerStatusStore } from "../peer-status-store.js";

@customElement("peer-status-context")
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
