import { Injectable } from '@nestjs/common';
import { uuid } from '../../types/generic/uuid.type';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findById = async (userId: uuid) => {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  };
}
