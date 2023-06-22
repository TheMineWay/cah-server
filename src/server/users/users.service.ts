import { Injectable } from '@nestjs/common';
import { uuid } from '../../types/generic/uuid.type';
import { UserRepository } from '../../repository/user.repository';
import { User } from '@prisma/client';
import { Create } from '../../types/database/create.type';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByid(userId: uuid) {
    return await this.userRepository.getUserById(userId);
  }

  async findByNick(nick: string) {
    return await this.userRepository.getUserByNick(nick);
  }

  async createUser(user: Create<User>) {
    return await this.userRepository.createUser(user);
  }
}
