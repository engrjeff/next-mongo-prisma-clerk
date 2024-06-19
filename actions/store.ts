'use server';

import {
  createStore,
  deleteExistingStore,
  updateExistingStore,
} from '@/services/store';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';
import { authedProcedure } from './procedures';

export const createStoreAction = authedProcedure
  .createServerAction()
  .onSuccess((data) => {
    revalidatePath('/stores');
  })
  .input(
    z
      .object({
        name: z
          .string({ required_error: 'Store name is required.' })
          .min(1, { message: 'Store name is required.' }),
        domain: z
          .string({ required_error: 'Store domain is required.' })
          .min(1, { message: 'Store domain is required.' }),
        categoryId: z
          .string({ required_error: 'Category is required.' })
          .min(1, { message: 'Category is required.' }),
      })
      .required(),
    { type: 'formData' }
  )
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;

    const newStore = await createStore({ userId: user.userId!, ...input });

    return newStore;
  });

export const updateStoreAction = authedProcedure
  .createServerAction()
  .onSuccess((data) => {
    revalidatePath('/stores');
  })
  .input(
    z
      .object({
        id: z
          .string({ required_error: 'Store ID is required.' })
          .min(1, { message: 'Store ID is required.' }),
        name: z
          .string({ required_error: 'Store name is required.' })
          .min(1, { message: 'Store name is required.' }),
        domain: z
          .string({ required_error: 'Store domain is required.' })
          .min(1, { message: 'Store domain is required.' }),
        categoryId: z
          .string({ required_error: 'Category is required.' })
          .min(1, { message: 'Category is required.' }),
      })
      .required(),
    { type: 'formData' }
  )
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;

    const { id, name, domain, categoryId } = input;

    const updatedStore = await updateExistingStore(id, {
      userId: user.userId!,
      name,
      domain,
      categoryId,
    });

    return updatedStore;
  });

export const deleteStoreAction = authedProcedure
  .createServerAction()
  .onSuccess((data) => {
    revalidatePath('/stores');
  })
  .input(
    z
      .object({
        id: z
          .string({ required_error: 'Store ID is required.' })
          .min(1, { message: 'Store ID is required.' }),
      })
      .required()
  )
  .handler(async ({ ctx, input }) => {
    const { user } = ctx;

    const { id } = input;

    await deleteExistingStore(id);
  });
