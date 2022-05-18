import { createContext } from '@lit-labs/context';
import { PeerStatusStore } from './peer-status-store';

export const peerStatusStoreContext = createContext<PeerStatusStore>(
  'hc_zome_peer_status/store'
);
