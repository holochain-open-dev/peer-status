import { AgentPubKey, AppAgentClient } from "@holochain/client";
import { ZomeMock } from "@holochain-open-dev/utils";

export class PeerStatusZomeMock extends ZomeMock implements AppAgentClient {
  async ping(_agents: AgentPubKey[]) {}
}
