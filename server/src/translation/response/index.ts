import { IsNumber, IsString } from 'class-validator';

export class TranslationResponse {
  @IsNumber()
  id: number;

  @IsString()
  value: string;
}
