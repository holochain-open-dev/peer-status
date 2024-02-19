export interface PeerStatusConfig {
  pingIntervalMs: number;
  onlineThresholdMs: number;
}

export const defaultConfig: PeerStatusConfig = {
  pingIntervalMs: 2000,
  onlineThresholdMs: 5000,
};
