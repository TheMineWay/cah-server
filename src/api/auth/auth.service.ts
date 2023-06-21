import { Injectable } from '@nestjs/common';
import { UsersService } from '../../server/users/users.service';
import { NotFoundException } from '../../exceptions/http/not-found.exception';
import { compareHashWithSalt } from '../../security/cryptography/cryptography';
import { WrongPasswordException } from '../../exceptions/auth/wrong-password.exception';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(nick: string, password: string) {
    const user = await this.usersService.findByNick(nick);

    if (!user) throw new NotFoundException();

    if (!compareHashWithSalt(user.password, password))
      throw new WrongPasswordException();

    const payload = { id: user.id, nick: user.nick };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
