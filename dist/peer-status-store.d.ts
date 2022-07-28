import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';
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
    myAgentPubKey: AgentPubKeyB64;
    /** Readable stores */
    config: PeerStatusConfig;
    intervalStore: Readable<number>;
    constructor(cellClient: CellClient, config?: Partial<PeerStatusConfig>);
    private ping;
    /** Actions */
    subscribeToAgentStatus(agentPubKey: AgentPubKeyB64): Readable<Status>;
}
