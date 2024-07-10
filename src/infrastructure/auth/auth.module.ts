import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';

@Module({
  exports: [AuthService],
  providers: [AuthService],
})
export class AuthModule {}
