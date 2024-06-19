import { Separator } from '@/components/ui/separator';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getCategories } from '@/services/category';
import { getStoreById } from '@/services/store';
import { notFound } from 'next/navigation';
import { EditStoreForm } from '../../_components/EditStoreForm';

export default async function EditStorePage({
  params,
}: {
  params: { id: string };
}) {
  const categories = await getCategories();

  const store = await getStoreById(params.id);

  if (!store) return notFound();

  return (
    <div className="px-6 space-y-6 flex flex-col">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/stores">Stores</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{store.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Separator />

      <EditStoreForm
        categories={categories}
        initialValues={{
          id: store.id,
          name: store.name,
          domain: store.domain,
          categoryId: store.categoryId,
        }}
      />
    </div>
  );
}
