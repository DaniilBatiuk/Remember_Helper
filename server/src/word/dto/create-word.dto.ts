import { IsNumber, IsString } from 'class-validator';

export class CreateWordDto {
  @IsString()
  value: string;

  @IsNumber()
  dictionaryId: number;

  translations: string[];
}
