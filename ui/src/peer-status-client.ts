import { isSignalFromCellWithRole } from "@holochain-open-dev/utils";
import { AgentPubKey, AppAgentClient, RoleName } from "@holochain/client";
import { UnsubscribeFunction } from "emittery";
import { SignalPayload } from "./types.js";

export interface PeerStatusEvents {
  ["signal"]: SignalPayload;
}
export class PeerStatusClient {
  constructor(
    public client: AppAgentClient,
    public roleName: RoleName,
    public zomeName = "peer_status"
  ) {}

  on<Name extends keyof PeerStatusEvents>(
    eventName: Name | readonly Name[],
    listener: (eventData: PeerStatusEvents[Name]) => void | Promise<void>
  ): UnsubscribeFunction {
    return this.client.on(eventName, async (signal) => {
      if (
        (await isSignalFromCellWithRole(this.client, this.roleName, signal)) &&
        this.zomeName === signal.zome_name
      ) {
        listener(signal.payload as SignalPayload);
      }
    });
  }

  /**
   * Ping all given agents, expecting for their pong later
   */
  async ping(agentPubKeys: AgentPubKey[]): Promise<void> {
    return this.callZome("ping", agentPubKeys);
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
