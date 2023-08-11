import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { PrismaService } from 'src/prisma.service';
import { returnWordObject } from './return-word-object';
import { TranslationService } from 'src/translation/translation.service';

@Injectable()
export class WordService {
  constructor(
    private prisma: PrismaService,
    private translationService: TranslationService,
  ) {}

  async create(dto: CreateWordDto) {
    const oldWord = await this.prisma.word.findFirst({
      where: {
        value: dto.value,
        dictionaryId: dto.dictionaryId,
      },
    });

    if (oldWord)
      throw new BadRequestException('This word is already in the dictionary');

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
