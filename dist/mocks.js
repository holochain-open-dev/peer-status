import { CellClient } from '@holochain-open-dev/cell-client';
import { deserializeHash, serializeHash, } from '@holochain-open-dev/core-types';
const sleep = (ms) => new Promise(r => setTimeout(() => r(null), ms));
export class StatusZomeMock extends CellClient {
    constructor(agents = [], latency = 500) {
        super(null, null);
        this.agents = agents;
        this.latency = latency;
    }
    get cellId() {
        return [
            deserializeHash('uhC0kkSpFl08_2D0Pvw2vEVEkfSgDVZCkyOf1je6qIdClO1o'),
            deserializeHash('uhCAk6oBoqygFqkDreZ0V0bH4R9cTN1OkcEG78OLxVptLWOI'),
        ];
    }
    get myPubKeyB64() {
        return serializeHash(this.cellId[1]);
    }
    async callZome(zomeName, fnName, payload, timeout) {
        await sleep(this.latency);
        return this[fnName](payload);
    }
    addSignalHandler(signalHandler) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=mocks.js.map