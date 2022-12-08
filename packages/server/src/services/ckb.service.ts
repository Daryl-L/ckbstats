import { Block, Indexer, config, RPC, BI } from '@ckb-lumos/lumos';
import { ChainInfo } from '@ckb-lumos/base/lib/api';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CKBService {
  private indexer: Indexer;
  private rpc: RPC;

  constructor(configService: ConfigService) {
    this.initializeLumosConfig(configService.getOrThrow('ckb.network'));
    this.indexer = new Indexer(
      configService.getOrThrow('ckb.indexerUrl'),
      configService.getOrThrow('ckb.rpcUrl'),
    );
    this.rpc = new RPC(configService.getOrThrow('ckb.rpcUrl'));
  }

  private initializeLumosConfig(network: 'AGGRON' | 'LINA') {
    switch (network) {
      case 'AGGRON':
        config.initializeConfig(config.predefined.AGGRON4);
        break;
      case 'LINA':
        config.initializeConfig(config.predefined.LINA);
        break;
    }
  }

  async bestBlockInfo(): Promise<Block> {
    return await this.rpc.getBlockByNumber(await this.rpc.getTipBlockNumber());
  }

  async tipBlockNumber(): Promise<string> {
    return await this.rpc.getTipBlockNumber();
  }

  async getBlockByNumber(blockNumber: string): Promise<Block> {
    return await this.rpc.getBlockByNumber(blockNumber);
  }

  async getBlockEconomicState(blockHash: string) {
    return await this.rpc.getBlockEconomicState(blockHash);
  }

  async getChainInfo(): Promise<ChainInfo> {
    return await this.rpc.getBlockchainInfo();
  }

  async getPeers() {
    return await this.rpc.getPeers();
  }

  async getCurrentEpoch() {
    return await this.rpc.getCurrentEpoch();
  }
}
