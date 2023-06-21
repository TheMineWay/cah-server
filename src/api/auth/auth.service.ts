import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../../server/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(nick: string, password: string) {
    const user = await this.usersService.findByNick(nick);

    if (!user) throw new HttpException('not found', HttpStatus.NOT_FOUND);
    return null;
  }
}
