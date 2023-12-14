// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class UserRegistrationDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  name: string;
}

export class UserLogInDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
