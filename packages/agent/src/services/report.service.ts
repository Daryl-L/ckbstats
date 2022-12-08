import Node from '@ckbstats/types/src/node';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ReportService {
  private reportUrl: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.reportUrl = this.configService.getOrThrow('ckbstats.url');
  }

  async reportNodeInfo(info: Node) {
    await this.httpService.axiosRef.post(this.reportUrl, info);
  }
}
