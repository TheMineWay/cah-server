import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { uuid } from '../types/generic/uuid.type';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  getUserById = async (userId: uuid) => {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  };
}
