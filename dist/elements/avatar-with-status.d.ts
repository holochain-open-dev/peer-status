import { LitElement } from 'lit';
import { AgentAvatar } from '@holochain-open-dev/profiles';
import { PeerStatus } from './peer-status';
import { AgentPubKey } from '@holochain/client';
declare const AvatarWithStatus_base: typeof LitElement & import("@open-wc/dedupe-mixin").Constructor<import("@open-wc/scoped-elements/types/src/types").ScopedElementsHost>;
export declare class AvatarWithStatus extends AvatarWithStatus_base {
    /** Public properties */
    /**
     * REQUIRED. The public key identifying the agent whose presence is going to be shown.
     */
    agentPubKey: AgentPubKey;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
    static get scopedElements(): {
        'agent-avatar': typeof AgentAvatar;
        'peer-status': typeof PeerStatus;
    };
}
export {};
