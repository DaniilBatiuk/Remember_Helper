import { IsString } from 'class-validator';

export class CreateDictionaryDto {
  @IsString()
  name: string;
}
