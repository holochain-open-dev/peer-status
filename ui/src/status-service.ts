import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKeyB64 } from '@holochain-open-dev/core-types';

export class StatusService {
  constructor(public cellClient: CellClient, public zomeName = 'status') {}

  /**
   * Ping all given agents, waiting for their pong
   */
  async ping(agentPubKeys: AgentPubKeyB64[]): Promise<void> {
    return this.callZome('ping', agentPubKeys);
  }

  private callZome(fn_name: string, payload: any) {
    return this.cellClient.callZome(this.zomeName, fn_name, payload);
  }
}
