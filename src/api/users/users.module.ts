import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LocalStrategy } from '../auth/local.strategy';
import { AuthService } from "../auth/auth.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, AuthService, LocalStrategy],
  controllers: [UsersController],
  exports: [TypeOrmModule],
})
export class UsersModule {}
