import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('create')
  async createDictionary(
    @CurrentUser('id') id: number,
    @Body() dto: CreateDictionaryDto,
  ) {
    return this.dictionaryService.create(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get()
  findAll(@CurrentUser('id') id: number) {
    return this.dictionaryService.findAll(id);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictionaryService.findOne(+id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @CurrentUser('id') userId: number,
    @Body() updateDictionaryDto: UpdateDictionaryDto,
  ) {
    return this.dictionaryService.update(+id, userId, updateDictionaryDto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictionaryService.remove(+id);
  }
}
