import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import configuration from 'config/configuration';
import { ClientModule } from './modules/client/client.module';
import { AppConfigModule } from './shared/modules/config/config.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
      cache: false,
      isGlobal: true,
    }),
    AppConfigModule,
    ClientModule,
  ],
})
export class AppModule {}
