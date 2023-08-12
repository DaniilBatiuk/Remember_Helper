import { Prisma } from '@prisma/client';

export const returnDictionaryObject: Prisma.DictionarySelect = {
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
};
