import { AgentPubKey } from "@holochain/client";

export type SignalPayload =
  | {
      type: "Ping";
      from_agent: AgentPubKey;
    }
  | {
    type: "Pong";
    from_agent: AgentPubKey;
  }