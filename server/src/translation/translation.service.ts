import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { PrismaService } from 'src/prisma.service';
import { returnTranslationObject } from './return-translation-object';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { DeleteTranslationDto } from './dto/delete-translation.dto';
import { TranslationResponse } from './response';

@Injectable()
export class TranslationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTranslationDto): Promise<TranslationResponse> {
    const oldWord = await this.prisma.translation.findFirst({
      where: {
        value: dto.value,
        wordId: dto.wordId,
      },
    });

    if (oldWord) throw new BadRequestException('This translation of word has already exist');

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

  async update(dto: UpdateTranslationDto): Promise<TranslationResponse> {
    return await this.prisma.translation.update({
      where: {
        id: dto.id,
      },
      data: {
        value: dto.value,
      },
      select: {
        ...returnTranslationObject,
      },
    });
  }

  remove(dto: DeleteTranslationDto): Promise<TranslationResponse> {
    return this.prisma.translation.delete({
      where: {
        id: dto.id,
      },
      select: {
        ...returnTranslationObject,
      },
    });
  }
}
