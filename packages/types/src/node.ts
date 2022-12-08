export default interface Node {
  name: string;
  version: string;
  latency: number;
  isStaking: boolean;
  peers: number;
  blockNumber: number;
  pendingTransactions: number;
  totalDifficulty: string;
  uncles: number;
  lastBlockTime: number;
  propagationTime: string;
}
