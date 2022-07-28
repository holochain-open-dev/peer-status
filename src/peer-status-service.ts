import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKey } from '@holochain/client';
export class PeerStatusService {
  constructor(public cellClient: CellClient, public zomeName = 'status') {}

  /**
   * Ping all given agents, waiting for their pong
   */
  async ping(agentPubKeys: AgentPubKey[]): Promise<void> {
    return this.callZome('ping', agentPubKeys);
  }

  private callZome(fn_name: string, payload: any) {
    return this.cellClient.callZome(this.zomeName, fn_name, payload);
  }
}
