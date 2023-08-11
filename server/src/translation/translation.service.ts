import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { PrismaService } from 'src/prisma.service';
import { returnTranslationObject } from './return-translation-object';

@Injectable()
export class TranslationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTranslationDto) {
    const oldWord = await this.prisma.translation.findFirst({
      where: {
        value: dto.value,
        wordId: dto.wordId,
      },
    });

    if (oldWord)
      throw new BadRequestException(
        'This translation of word has already exist',
      );

    return await this.prisma.translation.create({
      data: {
        value: dto.value,
        word: {
          connect: {
            id: dto.wordId,
          },
        },
      },
      select: {
        ...returnTranslationObject,
      },
    });
  }
}
