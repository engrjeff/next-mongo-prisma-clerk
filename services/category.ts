import prisma from '@/prisma/db';

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany();

    return categories;
  } catch (error) {
    console.log(`Error getting categories: `, error);
    return [];
  }
}
