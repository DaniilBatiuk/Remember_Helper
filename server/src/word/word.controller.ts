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
import { UpdateWordDto } from './dto/update-word.dto';

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

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordService.byId(+id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWordDto) {
    return this.wordService.update(+id, dto);
  }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  // @Auth()
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.wordService.remove(+id);
  // }
}
