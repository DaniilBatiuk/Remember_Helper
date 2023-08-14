import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { PrismaService } from 'src/prisma.service';
import { returnDictionaryObject } from './return-dictionary-object';
import { DictionaryResponse } from './response/intex';

@Injectable()
export class DictionaryService {
  constructor(private prisma: PrismaService) {}

  async create(id: number, dto: CreateDictionaryDto): Promise<DictionaryResponse> {
    const oldDictionary = await this.prisma.dictionary.findFirst({
      where: {
        name: dto.name,
        userId: id,
      },
    });

    if (oldDictionary) throw new BadRequestException('Dictionary with this name already exists');

    return await this.prisma.dictionary.create({
      data: {
        name: dto.name,
        user: {
          connect: {
            id: id,
          },
        },
      },
      select: {
        ...returnDictionaryObject,
      },
    });
  }

  findAll(id: number): Promise<DictionaryResponse[]> {
    return this.prisma.dictionary.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        ...returnDictionaryObject,
      },
    });
  }

  async findOne(id: number) {
    const dictionary = await this.tryToFind(id);

    return dictionary;
  }

  async update(id: number, userId: number, dto: UpdateDictionaryDto): Promise<DictionaryResponse> {
    await this.tryToFind(id);

    const oldDictionary = await this.prisma.dictionary.findFirst({
      where: {
        name: dto.name,
        userId: userId,
      },
    });

    if (oldDictionary) throw new BadRequestException('Dictionary with this name already exists');

    return this.prisma.dictionary.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
      },
      select: {
        ...returnDictionaryObject,
      },
    });
  }

  async remove(id: number): Promise<DictionaryResponse> {
    await this.tryToFind(id);

    return this.prisma.dictionary.delete({
      where: {
        id,
      },
      select: {
        ...returnDictionaryObject,
      },
    });
  }

  async tryToFind(id: number): Promise<DictionaryResponse> {
    const dictionary = await this.prisma.dictionary.findUnique({
      where: {
        id: id,
      },
      select: {
        ...returnDictionaryObject,
      },
    });

    if (!dictionary) throw new NotFoundException('Dictionary not found');

    return dictionary;
  }
}
