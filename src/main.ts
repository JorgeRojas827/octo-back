import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { swaggerConfigGenerator } from '@lib/swagger-config';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  swaggerConfigGenerator(app);

  const port = config.get<number>('PORT');
  await app.listen(port, () => logger.log(`Server started on port ${port}`));
}
bootstrap();
