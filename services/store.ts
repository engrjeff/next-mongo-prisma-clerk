'use server';

import prisma from '@/prisma/db';
import { auth } from '@clerk/nextjs/server';
import { Prisma } from '@prisma/client';
import slugify from 'slugify';

export async function getStores() {
  try {
    const user = auth();

    const stores = await prisma.store.findMany({
      where: {
        ownerId: user.userId!,
      },
      include: { category: { select: { name: true } } },
      take: 50,
    });

    return stores;
  } catch (error) {
    console.log('Get Stores Error: ', error);
    return [];
  }
}

export async function getStoreById(id: string) {
  try {
    const user = auth();

    const store = await prisma.store.findUnique({
      where: {
        ownerId: user.userId!,
        id,
      },
      include: { category: { select: { name: true } } },
    });

    return store;
  } catch (error) {
    console.log('Get Store by Id Error: ', error);
    return null;
  }
}

type CreateStoreDto = {
  userId: string;
  name: string;
  domain: string;
  categoryId: string;
};

export async function createStore({
  userId,
  name,
  domain,
  categoryId,
}: CreateStoreDto) {
  try {
    const newStore = await prisma.store.create({
      data: {
        ownerId: userId,
        name,
        domain,
        categoryId,
        slug: slugify(name, { lower: true }),
      },
    });

    return newStore;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        throw 'A new store cannot be created with the given name.';
      }
    }

    throw e;
  }
}

type UpdateStoreDto = Partial<CreateStoreDto>;

export async function updateExistingStore(
  id: string,
  { name, domain, categoryId }: UpdateStoreDto
) {
  try {
    const updatedStore = await prisma.store.update({
      where: {
        id,
      },
      data: {
        name,
        domain,
        categoryId,
        slug: name ? slugify(name, { lower: true }) : undefined,
      },
    });

    return updatedStore;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        throw 'A new store cannot be created with the given name.';
      }
    }

    throw e;
  }
}

export async function deleteExistingStore(id: string) {
  try {
    await prisma.store.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw e;
  }
}
