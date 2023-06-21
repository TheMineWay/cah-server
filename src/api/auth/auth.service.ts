import { Injectable } from '@nestjs/common';
import { UsersService } from '../../server/users/users.service';
import { NotFoundException } from '../../exceptions/http/not-found.exception';
import { compareHashWithSalt } from '../../security/cryptography/cryptography';
import { WrongPasswordException } from '../../exceptions/auth/wrong-password.exception';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(nick: string, password: string) {
    const user = await this.usersService.findByNick(nick);

    if (!user) throw new NotFoundException();

    if (!compareHashWithSalt(user.password, password))
      throw new WrongPasswordException();

    return null;
  }
}
