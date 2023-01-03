import {
  CellId,
  AppSignalCb,
  AppAgentClient,
  encodeHashToBase64,
  decodeHashFromBase64,
  CallZomeRequest,
  AppInfo
} from '@holochain/client';

const sleep = (ms: number) => new Promise(r => setTimeout(() => r(null), ms));

//@ts-ignore
export class StatusZomeMock implements AppAgentClient {
  constructor(
    protected agents: Array<any> = [],
    protected latency: number = 500
  ) {
  }

  get cellId(): CellId {
    return [
      decodeHashFromBase64('uhC0kkSpFl08_2D0Pvw2vEVEkfSgDVZCkyOf1je6qIdClO1o'),
      decodeHashFromBase64('uhCAk6oBoqygFqkDreZ0V0bH4R9cTN1OkcEG78OLxVptLWOI'),
    ];
  }

  get myPubKey() {
    return this.cellId[1];
  }

  async callZome(req: CallZomeRequest): Promise<any> {
    await sleep(this.latency);
    return (this as any)[req.fn_name](req.payload);
  }

  appInfo(): Promise<AppInfo> {
    throw new Error('Method not implemented.');
  }
}
