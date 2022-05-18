import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKeyB64, serializeHash } from '@holochain-open-dev/core-types';
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
  private _statusStore: Record<AgentPubKeyB64, Readable<number | undefined>> =
    {};

  /** Static info */
  public myAgentPubKey: AgentPubKeyB64;

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
    this.myAgentPubKey = serializeHash(cellClient.cellId[1]);

    setInterval(() => this.ping(), 2000);
    this.ping();
  }

  private ping() {
    const agentsWeAreSeeing = Object.keys(this._statusStore);
    if (agentsWeAreSeeing.length > 0) {
      this._service.ping(agentsWeAreSeeing);
    }
  }

  /** Actions */

  subscribeToAgentStatus(agentPubKey: AgentPubKeyB64): Readable<Status> {
    if (!this._statusStore[agentPubKey]) {
      this._statusStore[agentPubKey] = readable<undefined | number>(
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
            delete this._statusStore[agentPubKey];
            unsubscribe();
          };
        }
      );
    }
    this.ping();

    return derived(
      [this.intervalStore, this._statusStore[agentPubKey]],
      ([now, lastSeenTimestamp]) => lastSeenToStatus(now, lastSeenTimestamp)
    );
  }
}
