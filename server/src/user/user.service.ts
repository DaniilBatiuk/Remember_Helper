import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { returnUserObject } from './return-user-object';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateProfile(id: number, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (isSameUser && id !== isSameUser.id) {
      throw new BadRequestException('User with this email already exists');
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: dto.email,
        name: dto.name,
      },
    });
  }

  public async byId(id: number, selectObject: Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        ...returnUserObject,
        dictionaries: {
          select: {
            id: true,
            name: true,
            words: {
              select: {
                id: true,
                value: true,
                translations: {
                  select: {
                    id: true,
                    value: true,
                  },
                },
              },
            },
          },
        },
        ...selectObject,
      },
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }
}
