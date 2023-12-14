import { Module } from '@nestjs/common';
import { AppConfigService } from './config.service';
import { AppConfigController } from './config.controller';

@Module({
  imports: [],
  controllers: [AppConfigController],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
