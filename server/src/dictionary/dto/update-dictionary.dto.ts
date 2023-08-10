import { IsString } from 'class-validator';

export class UpdateDictionaryDto {
  @IsString()
  name: string;
}
