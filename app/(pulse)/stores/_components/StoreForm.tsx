'use client';

import { createStoreAction } from '@/actions/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Category } from '@prisma/client';
import { useServerAction } from 'zsa-react';

import { toast } from 'sonner';

export function StoreForm({ categories }: { categories: Category[] }) {
  const { isPending, execute, isSuccess, error, reset } =
    useServerAction(createStoreAction);

  return (
    <div className="max-w-80">
      <form
        onChange={reset}
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;

          const formData = new FormData(form);
          const [data, err] = await execute(formData);

          if (err) {
            // handle error
            if (!err.fieldErrors) {
              toast.error(err.message);
            }
            return;
          }

          form.reset();

          toast.success(`Store saved!`);
        }}
      >
        <fieldset className="space-y-3" disabled={isPending}>
          <div className="space-y-1">
            <Label htmlFor="name">Store Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Store name"
              className="h-10"
            />
            {error?.fieldErrors?.name ? (
              <em className="text-red-600 text-sm not-italic">
                {error.fieldErrors?.name[0]}
              </em>
            ) : null}
          </div>
          <div className="space-y-1">
            <Label htmlFor="domain">Domain</Label>
            <Input
              type="text"
              name="domain"
              id="domain"
              placeholder="store.com"
              className="h-10"
              inputMode="url"
            />
            {error?.fieldErrors?.domain ? (
              <em className="text-red-600 text-sm not-italic">
                {error.fieldErrors?.domain[0]}
              </em>
            ) : null}
          </div>

          <div>
            <Label htmlFor="categoryId">Category</Label>
            <Select name="categoryId" key={String(isSuccess)}>
              <SelectTrigger className="w-[240px] h-10">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {error?.fieldErrors?.categoryId ? (
              <em className="text-red-600 text-sm not-italic">
                {error.fieldErrors?.categoryId[0]}
              </em>
            ) : null}
          </div>

          <div className="pt-2">
            <Button type="submit">
              {isPending ? 'Saving...' : 'Save Store'}
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
