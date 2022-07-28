import { CellClient } from '@holochain-open-dev/cell-client';
import { HoloHashMap } from '@holochain-open-dev/utils';
import { AgentPubKey } from '@holochain/client';
import { Readable } from 'svelte/store';
import { PeerStatusConfig } from './config';
/**
 * {
 *  "AGENT_PUBKEY1": writable(11223544354), // The last time that AGENT_PUBKEY1 ponged us
 *  "AGENT_PUBKEY2": writable(11222345654),
 * }
 */
export declare enum Status {
    Online = "online",
    Idle = "idle",
    Offline = "offline"
}
export declare class PeerStatusStore {
    protected cellClient: CellClient;
    /** Private */
    private _service;
    private _statusStore;
    /** Static info */
    myAgentPubKey: AgentPubKey;
    /** Readable stores */
    config: PeerStatusConfig;
    intervalStore: Readable<number>;
    constructor(cellClient: CellClient, config?: Partial<PeerStatusConfig>);
    private ping;
    /** Actions */
    subscribeToAgentsStatuses(agentPubKeys: AgentPubKey[]): Readable<HoloHashMap<Status>>;
    subscribeToAgentStatus(agentPubKey: AgentPubKey): Readable<Status>;
}
