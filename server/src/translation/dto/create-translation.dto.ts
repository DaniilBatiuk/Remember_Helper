import { IsNumber, IsString } from 'class-validator';

export class CreateTranslationDto {
  @IsString()
  value: string;

  @IsNumber()
  wordId: number;
}
