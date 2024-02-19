import { readable } from "@holochain-open-dev/stores";
import { LazyHoloHashMap } from "@holochain-open-dev/utils";
import { AgentPubKey } from "@holochain/client";

import { defaultConfig, PeerStatusConfig } from "./config.js";
import { PeerStatusClient } from "./peer-status-client.js";

export enum Status {
  Online = "online",
  Offline = "offline",
}

export class PeerStatusStore {
  config: PeerStatusConfig;

  constructor(
    protected client: PeerStatusClient,
    config: Partial<PeerStatusConfig> = {}
  ) {
    this.config = { ...defaultConfig, ...config };
  }

  agentsStatus = new LazyHoloHashMap((agent: AgentPubKey) =>
    readable<Status>(Status.Offline, (set) => {
      let lastPong: number | undefined = undefined;
      const interval = setInterval(
        () => {
          this.client.ping([agent]);
          setTimeout(() => {
            const now = Date.now();
            if (!lastPong || now - lastPong > this.config.onlineThresholdMs) {
              set(Status.Offline);
            };
          }, this.config.onlineThresholdMs);
        },
        this.config.pingIntervalMs
      );
      const unsubscribe = this.client.onSignal((peerStatusSignal) => {
        if (
          peerStatusSignal.type === "Pong" &&
          peerStatusSignal.from_agent.toString() === agent.toString()
        ) {
          set(Status.Online);
          lastPong = Date.now();
        }
      });

      // ping immediately without waiting for first interval
      this.client.ping([agent]);
      setTimeout(() => {
        const now = Date.now();
        if (!lastPong || now - lastPong > this.config.onlineThresholdMs) {
          set(Status.Offline);
        };
      }, this.config.onlineThresholdMs);

      return () => {
        clearInterval(interval);
        unsubscribe();
      };
    })
  );
}
