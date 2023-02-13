export interface PeerStatusConfig {
  pingIntervalMs: number;
  onlineThresholdMs: number;
  idleThresholdMs: number;
}

export const defaultConfig: PeerStatusConfig = {
  pingIntervalMs: 2000,
  onlineThresholdMs: 5000,
  idleThresholdMs: 20000,
};
