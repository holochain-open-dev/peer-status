import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKey } from '@holochain/client';
export declare class PeerStatusService {
    cellClient: CellClient;
    zomeName: string;
    constructor(cellClient: CellClient, zomeName?: string);
    /**
     * Ping all given agents, waiting for their pong
     */
    ping(agentPubKeys: AgentPubKey[]): Promise<void>;
    private callZome;
}
