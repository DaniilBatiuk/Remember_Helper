import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { UpdateDictionaryDto } from './dto/update-dictionary.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DictionaryService {
  constructor(private prisma: PrismaService) {}

  async create(id: number, dto: CreateDictionaryDto) {
    const oldDictionary = await this.prisma.dictionary.findFirst({
      where: {
        name: dto.name,
        userId: id,
      },
    });

    if (oldDictionary)
      throw new BadRequestException('Dictionary with this name already exists');

    return await this.prisma.dictionary.create({
      data: {
        name: dto.name,
        user: {
          connect: {
            id: id,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all dictionary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dictionary`;
  }

  update(id: number, updateDictionaryDto: UpdateDictionaryDto) {
    return `This action updates a #${id} dictionary`;
  }

  remove(id: number) {
    return `This action removes a #${id} dictionary`;
  }
}
