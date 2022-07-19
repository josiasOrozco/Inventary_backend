import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './api/users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getHello() {
    return await this.usersService.findAll();
  }
}
