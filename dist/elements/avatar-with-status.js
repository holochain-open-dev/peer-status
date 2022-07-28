import { __decorate } from "tslib";
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { css, html, LitElement } from 'lit';
import { AgentAvatar } from '@holochain-open-dev/profiles';
import { property } from 'lit/decorators.js';
import { sharedStyles } from './utils/shared-styles';
import { PeerStatus } from './peer-status';
export class AvatarWithStatus extends ScopedElementsMixin(LitElement) {
    render() {
        return html `<agent-avatar .agentPubKey=${this.agentPubKey}>
        <peer-status .agentPubKey=${this.agentPubKey} slot="badge"></peer-status>
      </agent-avatar>`;
    }
    static get scopedElements() {
        return {
            'agent-avatar': AgentAvatar,
            'peer-status': PeerStatus,
        };
    }
}
AvatarWithStatus.styles = [
    sharedStyles,
    css `
      :host {
        display: flex;
      }
    `,
];
__decorate([
    property({
        attribute: 'agent-pub-key',
        type: Object,
    })
], AvatarWithStatus.prototype, "agentPubKey", void 0);
//# sourceMappingURL=avatar-with-status.js.map