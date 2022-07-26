import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { BaseController } from '../commons/controller.commons';
import { User } from './user.entity';
import { BaseService } from '../commons/service.commons';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
export class UsersController extends BaseController<User> {
  constructor(private readonly userService: UsersService) {
    super();
  }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
  getService(): BaseService<User> {
    return this.userService;
  }
}
