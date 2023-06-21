import { Injectable } from '@nestjs/common';
import { uuid } from '../../types/generic/uuid.type';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByid(userId: uuid) {
    return await this.userRepository.getUserById(userId);
  }

  async findByNick(nick: string) {
    return await this.userRepository.getUserByNick(nick);
  }
}
