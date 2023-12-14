import { Controller, Get } from '@nestjs/common';
import { AppConfigService } from './config.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App Config')
@Controller('config')
export class AppConfigController {
  constructor(private appConfigService: AppConfigService) {}

  @Get()
  @ApiOperation({ summary: 'Get config data' })
  async getPreSignedUrl() {
    return await this.appConfigService.getConfigData();
  }
}
