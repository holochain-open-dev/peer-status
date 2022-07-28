export class PeerStatusService {
    constructor(cellClient, zomeName = 'status') {
        this.cellClient = cellClient;
        this.zomeName = zomeName;
    }
    /**
     * Ping all given agents, waiting for their pong
     */
    async ping(agentPubKeys) {
        return this.callZome('ping', agentPubKeys);
    }
    callZome(fn_name, payload) {
        return this.cellClient.callZome(this.zomeName, fn_name, payload);
    }
}
//# sourceMappingURL=peer-status-service.js.map