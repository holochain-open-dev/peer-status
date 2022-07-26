import { CellClient } from '@holochain-open-dev/cell-client';
import {
  deserializeHash,
  serializeHash,
} from '@holochain-open-dev/utils';
import { CellId, AppSignalCb } from '@holochain/client';

const sleep = (ms: number) => new Promise(r => setTimeout(() => r(null), ms));

export class StatusZomeMock extends CellClient {
  constructor(
    protected agents: Array<any> = [],
    protected latency: number = 500
  ) {
    super(null as any, null as any);
  }

  get cellId(): CellId {
    return [
      deserializeHash('uhC0kkSpFl08_2D0Pvw2vEVEkfSgDVZCkyOf1je6qIdClO1o'),
      deserializeHash('uhCAk6oBoqygFqkDreZ0V0bH4R9cTN1OkcEG78OLxVptLWOI'),
    ];
  }

  get myPubKeyB64() {
    return serializeHash(this.cellId[1]);
  }

  async callZome(
    zomeName: string,
    fnName: string,
    payload: any,
    timeout?: number
  ): Promise<any> {
    await sleep(this.latency);
    return (this as any)[fnName](payload);
  }
  addSignalHandler(signalHandler: AppSignalCb): { unsubscribe: () => void } {
    throw new Error('Method not implemented.');
  }
}
