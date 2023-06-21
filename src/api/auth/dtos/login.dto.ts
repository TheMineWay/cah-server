import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  nick: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  password: string;
}
