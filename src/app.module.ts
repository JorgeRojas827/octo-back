import { ConfigureModule } from '@infrastructure/configure/configure.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
