import Node from './node';

export default interface Info {
  bestBlock: number;
  lastBlock: number;
  uncles: string;
  averagBlockTime: string;
  averageNetworkHashrate: string;
  difficulty: number;
  blockTime: number[];
  uncleCount: number[];
  blockPropagation: number[];
  transactions: number[];
  gasSpending: number[];
  difficulties: number[];
  nodeList: Node[];
}
