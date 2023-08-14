import { Word } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class DictionaryResponse {
  @IsNumber()
  id: number;
  @IsString()
  name: string;

  words: Word[];
}
