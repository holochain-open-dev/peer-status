import { CellClient } from '@holochain-open-dev/cell-client';
import { HoloHashMap } from '@holochain-open-dev/utils';
import { AgentPubKey, HoloHash } from '@holochain/client';
import merge from 'lodash-es/merge';

import { PeerStatusService } from './peer-status-service';
import { derived, Readable, readable } from 'svelte/store';
import { defaultConfig, PeerStatusConfig } from './config';

/**
 * {
 *  "AGENT_PUBKEY1": writable(11223544354), // The last time that AGENT_PUBKEY1 ponged us
 *  "AGENT_PUBKEY2": writable(11222345654),
 * }
 */

export enum Status {
  Online = 'online',
  Idle = 'idle',
  Offline = 'offline',
}

function lastSeenToStatus(now: number, lastSeen: number | undefined): Status {
  if (lastSeen === undefined) return Status.Offline;

  if (now - lastSeen < 5000) return Status.Online;
  if (now - lastSeen < 20000) return Status.Idle;
  return Status.Offline;
}

export class PeerStatusStore {
  /** Private */
  private _service: PeerStatusService;
  private _statusStore: HoloHashMap<Readable<number | undefined>> =
    new HoloHashMap();

  /** Static info */
  public myAgentPubKey: AgentPubKey;

  /** Readable stores */

  config: PeerStatusConfig;

  intervalStore = readable(Date.now(), set => {
    setInterval(() => set(Date.now()), 1000);
  });

  constructor(
    protected cellClient: CellClient,
    config: Partial<PeerStatusConfig> = {}
  ) {
    this.config = merge(defaultConfig, config);
    this._service = new PeerStatusService(cellClient, this.config.zomeName);
    this.myAgentPubKey = cellClient.cell.cell_id[1];

    setInterval(() => this.ping(), 2000);
    this.ping();
  }

  private ping() {
    const agentsWeAreSeeing = this._statusStore.keys();
    if (agentsWeAreSeeing.length > 0) {
      this._service.ping(agentsWeAreSeeing);
    }
  }

  /** Actions */

  subscribeToAgentsStatuses(
    agentPubKeys: AgentPubKey[]
  ): Readable<HoloHashMap<Status>> {
    const stores = agentPubKeys.map(a =>
      derived(
        [this.subscribeToAgentStatus(a)],
        s => [a, s[0]] as [AgentPubKey, Status]
      )
    );
    return derived(
      stores,
      (agentsArray) => {
        const holoHashMap: HoloHashMap<Status> = new HoloHashMap();
        agentsArray.forEach(([key, value]) => {
          holoHashMap.put(key, value);
        });
        return holoHashMap;
      }
    );
  }

  subscribeToAgentStatus(agentPubKey: AgentPubKey): Readable<Status> {
    if (!this._statusStore.get(agentPubKey)) {
      this._statusStore.put(agentPubKey, readable<undefined | number>(
        undefined,
        set => {
          const { unsubscribe } = this.cellClient.addSignalHandler(signal => {
            const signalPayload = signal.data.payload;

            if (
              signalPayload.type === 'Pong' &&
              signalPayload.from_agent === agentPubKey
            ) {
              set(Date.now());
            }
          });
          return () => {
            this._statusStore.delete(agentPubKey);
            unsubscribe();
          };
        }
      ));
    }
    this.ping();

    return derived(
      [this.intervalStore, this._statusStore.get(agentPubKey)],
      ([now, lastSeenTimestamp]) => lastSeenToStatus(now, lastSeenTimestamp)
    );
  }
}
