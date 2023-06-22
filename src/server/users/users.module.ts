import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRepository } from '../../repository/user.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UserRepository, UsersService],
  exports: [UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
