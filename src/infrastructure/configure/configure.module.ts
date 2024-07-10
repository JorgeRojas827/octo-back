import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { configOptions } from './configure-options';
import { env } from './configure-loader';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          ttl: configService.get<number>(env.config.throttle.ttl),
          limit: configService.get<number>(env.config.throttle.limit),
        },
      ],
    }),
  ],
})
export class ConfigureModule {}
