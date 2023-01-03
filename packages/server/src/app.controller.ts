import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Info from '@ckbstats/types/src/info';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BI } from '@ckb-lumos/lumos';
import { CKBService } from './services/ckb.service';
import { InfoEntity } from './entities/info.entity';
import Node from '@ckbstats/types/src/node';

@Controller()
export class AppController {
  private info: InfoEntity;
  private fetchBlockLock = 0;
  private fetchEconomicLock = 0;
  private fetchEpochLock = 0;
  private fetchChainInfoLock = 0;
  private updateNodeListLock = 0;

  constructor(
    private readonly appService: AppService,
    private readonly ckbService: CKBService,
  ) {
    this.info = new InfoEntity(50);
  }

  @Get()
  getHello(): Info {
    return this.info.info;
  }

  @Cron(CronExpression.EVERY_SECOND)
  async fetchBlock() {
    if (this.fetchBlockLock++ == 0) {
      try {
        const lastBlockNumber = this.info.lastBlockNumber;
        const block = lastBlockNumber.eq(0)
          ? await this.ckbService.bestBlockInfo()
          : await this.ckbService.getBlockByNumber(
              lastBlockNumber.add(1).toHexString(),
            );
        if (block) {
          this.info.insertBlock(block);
          this.info.insertBlockPropagation(await this.ckbService.latency());
        }
      } catch (e) {}
    }
    this.fetchBlockLock--;
  }

  @Cron(CronExpression.EVERY_SECOND)
  async fetchEconomic() {
    try {
      if (this.fetchEconomicLock++ == 0) {
        let blockNumber = this.info.lastEconomicBlock;
        if (blockNumber.eq(0)) {
          const block = await this.ckbService.bestBlockInfo();
          blockNumber = BI.from(block.header.number).sub(12);
        } else {
          blockNumber = blockNumber.add(1);
        }
        const block = await this.ckbService.getBlockByNumber(
          blockNumber.toHexString(),
        );
        if (block) {
          const economic = await this.ckbService.getBlockEconomicState(
            block.header.hash,
          );
          if (economic) {
            this.info.updateEconomic(economic, block);
          }
        }
      }
    } catch (e) {}

    this.fetchEconomicLock--;
  }

  @Cron(CronExpression.EVERY_SECOND)
  async fetchChainInfo() {
    if (this.fetchChainInfoLock++ == 0) {
      try {
        const chainInfo = await this.ckbService.getChainInfo();
        this.info.updateChainInfo(chainInfo);
      } catch (e) {}
    }
    this.fetchChainInfoLock--;
  }

  @Cron(CronExpression.EVERY_SECOND)
  async fetchEpoch() {
    if (this.fetchEpochLock++ == 0) {
      try {
        const epoch = await this.ckbService.getCurrentEpoch();
        this.info.updateEpoch(epoch);
      } catch (e) {}
    }

    this.fetchEpochLock--;
  }

  @Cron(CronExpression.EVERY_SECOND)
  async updateNodeList() {
    if (this.updateNodeListLock++ == 0) {
    }

    this.updateNodeListLock--;
  }

  @Post('/report')
  async report(@Body() req: Node) {
    this.info.updateNodeList(req);
  }
}
