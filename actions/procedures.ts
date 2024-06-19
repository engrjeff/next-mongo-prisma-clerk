import { auth } from '@clerk/nextjs/server';
import { createServerActionProcedure } from 'zsa';

export const authedProcedure = createServerActionProcedure().handler(
  async () => {
    try {
      const user = auth();

      if (!user) throw new Error('User not authenticated.');

      return {
        user,
      };
    } catch (error) {
      throw new Error('User not authenticated.');
    }
  }
);
