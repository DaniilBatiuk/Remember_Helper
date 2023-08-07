import { IsEmail, IsNumber, IsString } from 'class-validator';

export class AuthResponse {
  user: AuthUserResponse;

  @IsString()
  refreshToken: string;

  @IsString()
  accessToken: string;
}

export class AuthUserResponse {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;
}
