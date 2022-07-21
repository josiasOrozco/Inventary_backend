import {BaseService}  from "src/api/commons/service.commons";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BaseService<User>{

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,) {
    super();
  }

  getRepository(): Repository<User>{
    return this.userRepository
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
