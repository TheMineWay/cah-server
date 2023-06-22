import { Injectable } from '@nestjs/common';
import { uuid } from '../types/generic/uuid.type';
import { PrismaService } from '../server/prisma/prisma.service';

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
}
