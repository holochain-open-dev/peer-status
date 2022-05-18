import { Context, createContext } from '@holochain-open-dev/context';
import { PeerStatusStore } from './peer-status-store';

export const peerStatusStoreContext: Context<PeerStatusStore> = createContext(
  'hc_zome_peer_status/store'
);
