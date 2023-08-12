import { IsNumber, IsString } from 'class-validator';

export class UpdateTranslationDto {
  @IsNumber()
  id: number;

  @IsString()
  value: string;
}
