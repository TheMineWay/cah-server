import { Injectable } from '@nestjs/common';
import { uuid } from '../types/generic/uuid.type';
import { PrismaService } from '../server/prisma/prisma.service';
import { User } from '@prisma/client';
import { Create } from '../types/database/create.type';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(userId: uuid) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async getUserByNick(nick: string) {
    return await this.prisma.user.findUnique({
      where: {
        nick,
      },
    });
  }

  async createUser(user: Create<User>) {
    return await this.prisma.user.create({
      data: user,
    });
  }
}
