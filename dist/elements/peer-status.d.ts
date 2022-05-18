import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';
import { LitElement } from 'lit';
import { PeerStatusStore } from '../peer-status-store';
declare const PeerStatus_base: typeof LitElement & import("@open-wc/dedupe-mixin").Constructor<import("@open-wc/scoped-elements/types/src/types").ScopedElementsHost>;
export declare class PeerStatus extends PeerStatus_base {
    /** Public properties */
    /**
     * REQUIRED. The public key identifying the agent whose presence is going to be shown.
     */
    agentPubKey: AgentPubKeyB64;
    /** Dependencies */
    /**
     * `PeerStatusStore` that is requested via context.
     * Only set this property if you want to override the store requested via context.
     */
    store: PeerStatusStore;
    private _status;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
export {};
