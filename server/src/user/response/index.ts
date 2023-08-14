import { Dictionary } from '@prisma/client';
import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class UserResponse {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDate()
  createdAt: Date;
}

export class UserByIdResponse extends UserResponse {
  dictionaries: Dictionary[];
}
