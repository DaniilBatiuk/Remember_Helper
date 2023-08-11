import { Prisma } from '@prisma/client';

export const returnDictionaryObject: Prisma.DictionarySelect = {
  id: true,
  name: true,
  words: true,
};
