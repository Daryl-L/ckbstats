import { BI } from '@ckb-lumos/lumos';
import { Controller, Get } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AppService } from './app.service';
import { CKBService } from './services/ckb.service';
import Node from '@ckbstats/types/src/node';
import { ConfigService } from '@nestjs/config';
import { ReportService } from './services/report.service';

@Controller()
export class AppController {
  private updateNodeInfoLock = 0;
  private nodeInfo: Node;
  constructor(
    private readonly appService: AppService,
    private readonly ckbService: CKBService,
    private readonly configService: ConfigService,
    private readonly reportService: ReportService,
  ) {
    this.nodeInfo = {
      name: configService.getOrThrow('ckbstats.name'),
      version: '',
      latency: 0,
      isStaking: false,
      peers: 0,
      blockNumber: 0,
      pendingTransactions: 0,
      totalDifficulty: '',
      uncles: 0,
      lastBlockTime: 0,
      propagationTime: '',
    };
  }

  @Cron(CronExpression.EVERY_SECOND)
  async updateNodeInfo() {
    if (this.updateNodeInfoLock++ == 0) {
      try {
        const localNodeInfo = await this.ckbService.getLocalNodeInfo();
        if (localNodeInfo) {
          this.nodeInfo.version = localNodeInfo.version;
        }
      } catch (e) {}

      try {
        const chainInfo = await this.ckbService.getChainInfo();
        if (chainInfo) {
          this.nodeInfo.totalDifficulty = BI.from(chainInfo.difficulty)
            .div(BI.from(10).pow(15))
            .toNumber()
            .toFixed(2);
        }
      } catch (e) {}

      try {
        const start = Date.now();
        await this.ckbService.pingPeers();
        this.nodeInfo.latency = Date.now() - start;
      } catch (e) {}

      try {
        const peers = await this.ckbService.getPeers();
        this.nodeInfo.peers = peers.length;
      } catch (e) {}

      try {
        const bestBlock = await this.ckbService.bestBlockInfo();
        if (bestBlock) {
          this.nodeInfo.blockNumber = BI.from(
            bestBlock.header.number,
          ).toNumber();
          this.nodeInfo.uncles = bestBlock.uncles.length;
          this.nodeInfo.lastBlockTime = BI.from(
            bestBlock.header.timestamp,
          ).toNumber();
        }
      } catch (e) {}

      try {
        const txes = await this.ckbService.getRawTxPool();
        if (txes) {
          this.nodeInfo.pendingTransactions = txes.pending.length;
        }
      } catch (e) {}

      this.reportService.reportNodeInfo(this.nodeInfo);
    }

    this.updateNodeInfoLock--;
  }
}
