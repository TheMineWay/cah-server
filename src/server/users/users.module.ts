import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRepository } from '../../repository/user.repository';

@Module({
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
