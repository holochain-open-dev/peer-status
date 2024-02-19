import { consume } from "@lit/context";
import { StoreSubscriber } from "@holochain-open-dev/stores";
import { AgentPubKey } from "@holochain/client";
import { css, html, LitElement } from "lit";
import { hashProperty, sharedStyles } from "@holochain-open-dev/elements";
import { customElement, property } from "lit/decorators.js";

import { peerStatusStoreContext } from "../context.js";
import { PeerStatusStore } from "../peer-status-store.js";

@customElement("peer-status")
export class PeerStatus extends LitElement {
  /** Public properties */

  /**
   * REQUIRED. The public key identifying the agent whose presence is going to be shown.
   */
  @property(hashProperty("agent-pub-key"))
  agentPubKey!: AgentPubKey;

  /**
   * @internal
   */
  @consume({ context: peerStatusStoreContext, subscribe: true })
  @property({ type: Object })
  store!: PeerStatusStore;

  /**
   * @internal
   */
  _status = new StoreSubscriber(this, () =>
    this.store.agentsStatus.get(this.agentPubKey),
    () => [this.store, this.agentPubKey],
  );

  render() {
    return html`<div class="outer">
      <div class=${this._status.value}></div>
    </div>`;
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
      .offline {
        border-radius: 50%;
      }

      .online {
        top: 2px;
        left: 2px;
        position: absolute;
        height: 11px;
        width: 11px;
      }

      .online {
        background-color: #00ef00;
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
