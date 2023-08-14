import { IsNumber, IsString } from 'class-validator';

export class WordResponse {
  @IsNumber()
  id: number;
  @IsString()
  value: string;

  translations: Translations[];
}

export class Translations {
  @IsNumber()
  id: number;
  @IsString()
  value: string;
}
