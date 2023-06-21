import { Injectable } from '@nestjs/common';
import { uuid } from '../../types/generic/uuid.type';

@Injectable()
export class UsersService {
  findById = async (userId: uuid) => {
    return userId;
  };
}
