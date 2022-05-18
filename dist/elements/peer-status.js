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
        return html `<div class=${this._status.value}></div>`;
    }
}
PeerStatus.styles = [
    sharedStyles,
    css `
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
__decorate([
    property({
        attribute: 'agent-pub-key',
        type: String,
    })
], PeerStatus.prototype, "agentPubKey", void 0);
__decorate([
    contextProvided({ context: peerStatusStoreContext, subscribe: true }),
    property({ type: Object })
], PeerStatus.prototype, "store", void 0);
//# sourceMappingURL=peer-status.js.map