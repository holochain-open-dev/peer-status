import { CellClient } from '@holochain-open-dev/cell-client';
import { AgentPubKeyB64, serializeHash } from '@holochain-open-dev/core-types';
import merge from 'lodash-es/merge';

import { StatusService } from './status-service';
import { writable, Writable, derived, Readable, get } from 'svelte/store';
import { defaultConfig, StatusConfig } from './config';

/**
 * {
 *  "AGENT_PUBKEY1": writable(11223544354), // The last time that AGENT_PUBKEY1 ponged us
 *  "AGENT_PUBKEY2": writable(11222345654),
 * }
 */

export enum Status {
  Online,
  Idle,
  Offline,
}

export class StatusStore {
  /** Private */
  private _service: StatusService;
  private _statusStore: Record<AgentPubKeyB64, Writable<number | undefined>> =
    {};

  /** Static info */
  public myAgentPubKey: AgentPubKeyB64;

  /** Readable stores */

  lastSeenToStatus(lastSeen: number | undefined): Status {
    if (lastSeen === undefined) return Status.Offline;

    const now = Date.now();
    if (now - lastSeen < 5000) return Status.Online;
    if (now - lastSeen < 20000) return Status.Idle;
    return Status.Offline;
  }

  config: StatusConfig;

  constructor(
    protected cellClient: CellClient,
    config: Partial<StatusConfig> = {}
  ) {
    this.config = merge(defaultConfig, config);
    this._service = new StatusService(cellClient, this.config.zomeName);
    this.myAgentPubKey = serializeHash(cellClient.cellId[1]);

    setInterval(() => this.ping(), 2000);

    cellClient.addSignalHandler(signal => {
      const signalPayload = signal.data.payload;

      if (signalPayload.type === 'Pong') {
        this._statusStore[signalPayload.from_agent].set(Date.now());
      }
    });
  }

  ping() {
    for (const s of Object.values(this._statusStore)) {
      s.update(p => p);
    }

    const agentsWeAreSeeing = Object.keys(this._statusStore);
    if (agentsWeAreSeeing.length > 0) {
      this._service.ping(agentsWeAreSeeing);
    }
  }

  /** Actions */

  subscribeToAgentStatus(agentPubKey: AgentPubKeyB64): Readable<Status> {
    if (!this._statusStore[agentPubKey]) {
      this._statusStore[agentPubKey] = writable(undefined);
    }

    return derived(this._statusStore[agentPubKey], lastSeenTimestamp =>
      this.lastSeenToStatus(lastSeenTimestamp)
    );
  }
}
