import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { PrismaService } from 'src/prisma.service';
import { returnWordObject } from './return-word-object';
import { TranslationService } from 'src/translation/translation.service';
import { UpdateWordDto } from './dto/update-word.dto';

@Injectable()
export class WordService {
  constructor(private prisma: PrismaService, private translationService: TranslationService) {}

  async create(dto: CreateWordDto) {
    const oldWord = await this.prisma.word.findFirst({
      where: {
        value: dto.value,
        dictionaryId: dto.dictionaryId,
      },
    });

    if (oldWord) throw new BadRequestException('This word is already in the dictionary');

    const wordId = await this.prisma.word.create({
      data: {
        value: dto.value,
        dictionary: {
          connect: {
            id: dto.dictionaryId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    await Promise.all(
      dto.translations.map(async el => {
        await this.translationService.create({ value: el, wordId: wordId.id });
      }),
    );

    return await this.byId(wordId.id);
  }

  async update(id: number, dto: UpdateWordDto) {
    const oldWord = await this.prisma.word.findFirst({
      where: {
        id: id,
      },
    });

    if (!oldWord) throw new BadRequestException('This word is not exist in the dictionary');
    else if (oldWord.value === dto.value)
      throw new BadRequestException('This word is already in the dictionary');

    if (oldWord.value !== dto.value) {
      await this.prisma.word.update({
        where: {
          id,
        },
        data: {
          value: dto.value,
        },
      });
    }

    await Promise.all(
      dto.translations.map(async el => {
        await this.translationService.update({
          value: el.translations,
          id: el.translationsId,
        });
      }),
    );

    return await this.byId(id);
  }

  async remove(id: number) {
    const translation = (await this.byId(id)).translations;

    await Promise.all(
      translation.map(async el => {
        await this.translationService.remove({
          id: el.id,
        });
      }),
    );

    return this.prisma.word.delete({
      where: {
        id,
      },
      select: {
        ...returnWordObject,
      },
    });
  }

  public async byId(id: number) {
    const word = await this.prisma.word.findUnique({
      where: {
        id,
      },
      select: {
        ...returnWordObject,
      },
    });

    if (!word) throw new NotFoundException('Word not found');

    return word;
  }
}
