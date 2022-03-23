import { Context, createContext } from '@holochain-open-dev/context';
import { StatusStore } from './status-store';

export const statusStoreContext: Context<StatusStore> = createContext(
  'hc_zome_statuss/store'
);
