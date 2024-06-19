'use client';

import { updateStoreAction } from '@/actions/store';
import { Button, buttonVariants } from '@/components/ui/button';
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

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface FormValues {
  id: string;
  name: string;
  domain: string;
  categoryId: string;
}

export function EditStoreForm({
  categories,
  initialValues,
}: {
  initialValues?: FormValues;
  categories: Category[];
}) {
  const { isPending, execute, isSuccess, error, reset } =
    useServerAction(updateStoreAction);

  const router = useRouter();

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

          toast.success(`Store updated!`);

          router.replace('/stores');
        }}
      >
        <fieldset className="space-y-3" disabled={isPending}>
          <input type="hidden" name="id" defaultValue={initialValues?.id} />
          <div className="space-y-1">
            <Label htmlFor="name">Store Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Store name"
              className="h-10"
              defaultValue={initialValues?.name}
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
              defaultValue={initialValues?.domain}
            />
            {error?.fieldErrors?.domain ? (
              <em className="text-red-600 text-sm not-italic">
                {error.fieldErrors?.domain[0]}
              </em>
            ) : null}
          </div>

          <div>
            <Label htmlFor="categoryId">Category</Label>
            <Select
              defaultValue={initialValues?.categoryId}
              name="categoryId"
              key={String(isSuccess)}
            >
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

          <div className="pt-2 space-x-3">
            <Link
              href="/stores"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Cancel
            </Link>

            <Button type="submit">
              {isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
