import { derived, readable } from "@holochain-open-dev/stores";
import { LazyHoloHashMap, mapLazyValues } from "@holochain-open-dev/utils";
import { AgentPubKey } from "@holochain/client";

import { defaultConfig, PeerStatusConfig } from "./config.js";
import { PeerStatusClient } from "./peer-status-client.js";

export enum Status {
  Online = "online",
  Idle = "idle",
  Offline = "offline",
}

function lastSeenToStatus(
  lastSeen: number | undefined,
  config: PeerStatusConfig
): Status {
  if (lastSeen === undefined) return Status.Offline;
  const now = Date.now();

  if (now - lastSeen < config.onlineThresholdMs) return Status.Online;
  if (now - lastSeen < config.idleThresholdMs) return Status.Idle;
  return Status.Offline;
}

export class PeerStatusStore {
  config: PeerStatusConfig;

  constructor(
    protected client: PeerStatusClient,
    config: Partial<PeerStatusConfig> = {}
  ) {
    this.config = { ...defaultConfig, ...config };
  }

  agentsLastSeen = new LazyHoloHashMap((agent: AgentPubKey) =>
    readable<number | undefined>(undefined, (set) => {
      const interval = setInterval(
        () => this.client.ping([agent]),
        this.config.pingIntervalMs
      );
      const unsubscribe = this.client.onSignal((peerStatusSignal) => {
        if (
          peerStatusSignal.type === "Pong" &&
          peerStatusSignal.from_agent.toString() === agent.toString()
        ) {
          set(Date.now());
        }
      });

      return () => {
        clearInterval(interval);
        unsubscribe();
      };
    })
  );

  agentsStatus = mapLazyValues(this.agentsLastSeen, (r) =>
    derived(r, (lastSeen) => lastSeenToStatus(lastSeen, this.config))
  );
}
