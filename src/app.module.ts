import { ConfigureModule } from '@infrastructure/configure/configure.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { AuthModule } from './infrastructure/auth/auth.module';

@Module({
  imports: [ConfigureModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
