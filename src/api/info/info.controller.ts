import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { Public } from '../../security/auth/public.guard';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Public()
  @Get()
  async getInfo() {
    await this.infoService.getInfo();
  }
}
