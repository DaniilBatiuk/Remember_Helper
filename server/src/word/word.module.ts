import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { PrismaService } from 'src/prisma.service';
import { TranslationService } from 'src/translation/translation.service';

@Module({
  controllers: [WordController],
  providers: [WordService, PrismaService, TranslationService],
})
export class WordModule {}
