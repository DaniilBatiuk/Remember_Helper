import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name: string;
}
