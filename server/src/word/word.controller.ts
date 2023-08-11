import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WordService } from './word.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateWordDto } from './dto/create-word.dto';

@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('create')
  async createDictionary(@Body() dto: CreateWordDto) {
    return this.wordService.create(dto);
  }

  // @UsePipes(new ValidationPipe())
  // @Auth()
  // @Get()
  // findAll(@CurrentUser('id') id: number) {
  //   return this.wordService.findAll(id);
  // }

  // @UsePipes(new ValidationPipe())
  // @Auth()
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.wordService.findOne(+id);
  // }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  // @Auth()
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @CurrentUser('id') userId: number,
  //   @Body() updateDictionaryDto: UpdateDictionaryDto,
  // ) {
  //   return this.wordService.update(+id, userId, updateDictionaryDto);
  // }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  // @Auth()
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.wordService.remove(+id);
  // }
}
