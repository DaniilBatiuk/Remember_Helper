import { ArrayMinSize, IsNumber, IsString } from 'class-validator';

export class UpdateWordDto {
  @IsString()
  value: string;

  @IsNumber()
  dictionaryId: number;

  @ArrayMinSize(1)
  translations: Translations[];
}

class Translations {
  @IsNumber()
  translationsId: number;

  @IsString()
  translations: string;
}
