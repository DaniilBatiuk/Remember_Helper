import { Module } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationController } from './translation.controller';
import { PrismaService } from 'src/prisma.service';
import { WordService } from 'src/word/word.service';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService, PrismaService],
  exports:[TranslationService]
})
export class TranslationModule {}
