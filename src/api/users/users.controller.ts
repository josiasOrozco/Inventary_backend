import { Controller } from '@nestjs/common';
import { BaseController } from '../commons/controller.commons';
import { User } from './user.entity';
import { BaseService } from '../commons/service.commons';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController extends BaseController<User> {
  constructor(private readonly userService: UsersService) {
    super();
  }

  getService(): BaseService<User> {
    return this.userService;
  }
}
