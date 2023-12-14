import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class User {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
