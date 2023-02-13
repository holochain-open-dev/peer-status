export interface PeerStatusConfig {
  pingIntervalMs: number;
}

export const defaultConfig: PeerStatusConfig = {
  pingIntervalMs: 2000,
};
