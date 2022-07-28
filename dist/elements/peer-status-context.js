import { __decorate } from "tslib";
import { css, html, LitElement } from 'lit';
import { contextProvider } from '@lit-labs/context';
import { property } from 'lit/decorators.js';
import { peerStatusStoreContext } from '../context';
export class PeerStatusContext extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
}
PeerStatusContext.styles = css `
    :host {
      display: contents;
    }
  `;
__decorate([
    contextProvider({ context: peerStatusStoreContext }),
    property({ type: Object })
], PeerStatusContext.prototype, "store", void 0);
//# sourceMappingURL=peer-status-context.js.map