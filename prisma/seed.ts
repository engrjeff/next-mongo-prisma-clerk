import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.category.createMany({
    data: [
      'Apparel',
      'Food & Drink',
      'Beauty & Fitness',
      'Electronics',
      'Toys & Hobbies',
    ].map((category) => ({
      name: category,
    })),
  });

  console.log('Seed categories successful!\n');
  console.log({ categories });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
