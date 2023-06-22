import { Injectable } from '@nestjs/common';
import pj from '../../../package.json';

@Injectable()
export class InfoService {
  async getInfo() {
    return {
      minClientVersion: '1.0.0',
      maxClientVersion: '1.0.0',
      serverVersion: pj.version,
    };
  }
}
