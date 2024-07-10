import { env } from '@infrastructure/configure/configure-loader';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>(env.app.key);
  }

  validateApiKey(providedApiKey: string): void {
    if (!providedApiKey) {
      this.logger.warn('API key is missing');
      throw new UnauthorizedException('API key is missing');
    }

    if (this.apiKey !== providedApiKey) {
      this.logger.warn(`Invalid API key: ${providedApiKey}`);
      throw new UnauthorizedException('Invalid API key');
    }
  }
}
