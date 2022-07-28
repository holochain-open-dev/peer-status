import { __decorate } from "tslib";
import { contextProvided } from '@lit-labs/context';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { StoreSubscriber } from 'lit-svelte-stores';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { peerStatusStoreContext } from '../context';
import { sharedStyles } from './utils/shared-styles';
export class PeerStatus extends ScopedElementsMixin(LitElement) {
    constructor() {
        /** Public properties */
        super(...arguments);
        this._status = new StoreSubscriber(this, () => this.store.subscribeToAgentStatus(this.agentPubKey));
    }
    render() {
        return html `<div class="outer"><div class=${this._status.value}></div></div>`;
    }
}
PeerStatus.styles = [
    sharedStyles,
    css `
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
__decorate([
    property({
        attribute: 'agent-pub-key',
        type: Object,
    })
], PeerStatus.prototype, "agentPubKey", void 0);
__decorate([
    contextProvided({ context: peerStatusStoreContext, subscribe: true }),
    property({ type: Object })
], PeerStatus.prototype, "store", void 0);
//# sourceMappingURL=peer-status.js.map