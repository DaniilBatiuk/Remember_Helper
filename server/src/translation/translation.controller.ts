import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TranslationService } from './translation.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateTranslationDto } from './dto/create-translation.dto';

@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('create')
  async createDictionary(@Body() dto: CreateTranslationDto) {
    return this.translationService.create(dto);
  }
}
