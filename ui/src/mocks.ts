import { AppAgentClient } from "@holochain/client";
import { ZomeMock } from "@holochain-open-dev/utils";

const sleep = (ms: number) => new Promise((r) => setTimeout(() => r(null), ms));
export class StatusZomeMock extends ZomeMock implements AppAgentClient {}
