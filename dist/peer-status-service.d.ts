import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';
export declare class PeerStatusService {
    cellClient: CellClient;
    zomeName: string;
    constructor(cellClient: CellClient, zomeName?: string);
    /**
     * Ping all given agents, waiting for their pong
     */
    ping(agentPubKeys: AgentPubKeyB64[]): Promise<void>;
    private callZome;
}
