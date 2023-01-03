import { BI, Block } from '@ckb-lumos/lumos';
import { Epoch, BlockEconomicState, ChainInfo } from '@ckb-lumos/base/lib/api';
import Info from '@ckbstats/types/src/info';
import Node from '@ckbstats/types/src/node';

export class InfoEntity {
  private _info: Info;
  private _lastChainInfo: ChainInfo;
  private _lastEpoch: Epoch;
  private _epocheBlocks: Block[] = [];
  private _epochBlockTime: number[] = [];
  private _blocks: Block[] = [];
  private _lastBlock: Block;
  private _lastEconomicBlock: Block;
  private nodeList: Map<string, Node>;

  constructor(private readonly blockCount: number) {
    this._info = {
      bestBlock: 0,
      lastBlock: 0,
      uncles: '0/0',
      averagBlockTime: '0',
      averageNetworkHashrate: '0',
      difficulty: 0,
      blockTime: [],
      blockPropagation: [],
      transactions: [],
      gasSpending: [],
      difficulties: [],
      uncleCount: [],
      nodeList: [],
    };
    this.nodeList = new Map<string, Node>();
  }

  public get info(): Info {
    const info = this._info;
    info.nodeList = [];
    for (const node of this.nodeList.values()) {
      info.nodeList.push(node);
    }
    info.nodeList = info.nodeList.sort(
      (a, b) => a.lastBlockTime - b.lastBlockTime,
    );
    return info;
  }

  public updateNodeList(node: Node) {
    this.nodeList.set(node.name, node);
  }

  public get lastBlockNumber(): BI {
    return this._lastBlock
      ? BI.from(this._lastBlock.header.number)
      : BI.from(0);
  }

  public get lastEconomicBlock(): BI {
    return this._lastEconomicBlock
      ? BI.from(this._lastEconomicBlock.header.number)
      : BI.from(0);
  }

  public updateEconomic(economic: BlockEconomicState, block: Block) {
    this._lastEconomicBlock = block;
    if (this._info.gasSpending.length == this.blockCount) {
      this._info.gasSpending.shift();
    }

    this._info.gasSpending.push(BI.from(economic.txsFee).toNumber());
  }

  public updateEpoch(epoch: Epoch) {
    if (
      !this._lastEpoch ||
      BI.from(epoch.number).gt(BI.from(this._lastEpoch.number))
    ) {
      this._lastEpoch = epoch;
      this.resetEpochBlock(epoch);
    }
  }

  private resetEpochBlock(epoch: Epoch) {
    if (
      this._epocheBlocks.length == 0 ||
      BI.from(this._epocheBlocks[0].header.number).gte(
        BI.from(epoch.startNumber),
      )
    ) {
      return;
    }

    while (
      this._epocheBlocks.length > 0 &&
      BI.from(this._epocheBlocks[0].header.number).lt(
        BI.from(epoch.startNumber),
      )
    ) {
      this._epocheBlocks.shift();
      this._epochBlockTime.shift();
    }
  }

  public updateChainInfo(chainInfo: ChainInfo) {
    if (
      !this._lastChainInfo ||
      BI.from(this._lastChainInfo.epoch)
        .and(0xffffff)
        .lt(BI.from(chainInfo.epoch).and(0xffffff))
    ) {
      this._lastChainInfo = chainInfo;
      this.updateDifficulty(chainInfo);
    }
  }

  private updateDifficulty(chainInfo: ChainInfo) {
    this._info.difficulty =
      BI.from(chainInfo.difficulty).div(BI.from(10).pow(13)).toNumber() / 100;
    if (this._info.difficulties.length == this.blockCount) {
      this._info.difficulties.shift();
    }
    this._info.difficulties.push(this._info.difficulty);
  }

  public insertBlock(block: Block) {
    if (
      this._lastBlock &&
      this._lastBlock.header.number == block.header.number
    ) {
      return;
    }

    this.updateLastBlockTime(block);
    this.updateBlockTime(block);
    this.updateUncle(block);
    this.updateTransactions(block);
    this.updateBlocks(block);
    this.updateAverageBlockTime();

    this._info.bestBlock = BI.from(block.header.number).toNumber();
    this._lastBlock = block;
  }

  async insertBlockPropagation(time: number): Promise<void> {
    if (this._info.blockPropagation.length == this.blockCount) {
      this._info.blockPropagation.shift();
    }
    this._info.blockPropagation.push(time);
  }

  private updateBlocks(block: Block) {
    if (this._blocks.length == this.blockCount) {
      this._blocks.shift();
    }

    this._blocks.push(block);
  }

  private updateTransactions(block: Block) {
    if (this._blocks.length == this.blockCount) {
      this._info.transactions.shift();
    }

    this._info.transactions.push(block.transactions.length);
  }

  private updateUncle(block: Block) {
    if (this._blocks.length == this.blockCount) {
      this._info.uncleCount.shift();
    }

    this._info.uncleCount.push(block.uncles.length);
    this._info.uncles = `${
      block.uncles.length
    } / ${this._info.uncleCount.reduce((a, c) => a + c)}`;
  }

  private updateLastBlockTime(block: Block) {
    this._info.lastBlock = BI.from(block.header.timestamp).div(1000).toNumber();
  }

  private updateBlockTime(block: Block) {
    if (this._blocks.length == this.blockCount) {
      this._info.blockTime.shift();
    }

    const time = this._lastBlock
      ? BI.from(block.header.timestamp)
          .sub(BI.from(this._lastBlock.header.timestamp))
          .toNumber()
      : 0;

    this._info.blockTime.push(time);
    this._epochBlockTime.push(time);
  }

  private updateAverageBlockTime() {
    const avg =
      this._epochBlockTime.reduce((p, v) => p + v) /
      this._epochBlockTime.length /
      1000;

    this._info.averagBlockTime = avg.toFixed(2);

    this._info.averageNetworkHashrate = (this._info.difficulty / avg).toFixed(
      2,
    );
  }
}
