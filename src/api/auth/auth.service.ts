import { Injectable } from '@nestjs/common';
import { UsersService } from '../../server/users/users.service';
import { NotFoundException } from '../../exceptions/http/not-found.exception';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(nick: string, password: string) {
    const user = await this.usersService.findByNick(nick);

    if (!user) throw new NotFoundException();
    return null;
  }
}
