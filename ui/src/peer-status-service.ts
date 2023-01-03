import { AgentPubKey, AppAgentClient, RoleName } from '@holochain/client';
export class PeerStatusService {
  constructor(public client: AppAgentClient, public roleName: RoleName, public zomeName = 'status') {}

  /**
   * Ping all given agents, waiting for their pong
   */
  async ping(agentPubKeys: AgentPubKey[]): Promise<void> {
    return this.callZome('ping', agentPubKeys);
  }

  private callZome(fn_name: string, payload: any) {
    return this.client.callZome({
      role_name: this.roleName,
      fn_name,
      zome_name: this.zomeName,
      payload,
    });
  }
}
