import { LitElement } from 'lit';
import { AgentAvatar, Profile, ProfilesStore } from '@holochain-open-dev/profiles';
import { SlSkeleton } from '@scoped-elements/shoelace';
import { List, ListItem } from '@scoped-elements/material-web';
import { PeerStatusStore } from '../peer-status-store';
import { AvatarWithStatus } from './avatar-with-status';
import { AgentPubKey } from '@holochain/client';
import { HoloHashMap } from '@holochain-open-dev/utils';
declare const ListAgentsByStatus_base: typeof LitElement & import("@open-wc/dedupe-mixin").Constructor<import("@open-wc/scoped-elements/types/src/types").ScopedElementsHost>;
export declare class ListAgentsByStatus extends ListAgentsByStatus_base {
    /** Public properties */
    /**
     * REQUIRED. The public keys identifying the agents whose presence is going to be shown.
     */
    agents: AgentPubKey[];
    /**
     * `PeerStatusStore` that is requested via context.
     * Only set this property if you want to override the store requested via context.
     */
    store: PeerStatusStore;
    profilesStore: ProfilesStore;
    private _allProfilesTask;
    private _onlineAgents;
    private _offlineAgents;
    renderOnlineAgents(profiles: HoloHashMap<Profile | undefined>, agentPubKeys: AgentPubKey[]): import("lit-html").TemplateResult<1>;
    renderOfflineAgents(profiles: HoloHashMap<Profile | undefined>, agentPubKeys: AgentPubKey[]): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
    static get scopedElements(): {
        'avatar-with-status': typeof AvatarWithStatus;
        'agent-avatar': typeof AgentAvatar;
        'sl-skeleton': typeof SlSkeleton;
        'mwc-list': typeof List;
        'mwc-list-item': typeof ListItem;
    };
}
export {};
