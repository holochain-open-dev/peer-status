import { CellClient } from '@holochain-open-dev/cell-client';
import { CellId, AppSignalCb } from '@holochain/client';
export declare class StatusZomeMock extends CellClient {
    protected agents: Array<any>;
    protected latency: number;
    constructor(agents?: Array<any>, latency?: number);
    get cellId(): CellId;
    get myPubKeyB64(): string;
    callZome(zomeName: string, fnName: string, payload: any, timeout?: number): Promise<any>;
    addSignalHandler(signalHandler: AppSignalCb): {
        unsubscribe: () => void;
    };
}
