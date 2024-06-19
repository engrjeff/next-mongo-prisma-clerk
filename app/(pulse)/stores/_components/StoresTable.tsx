import { buttonVariants } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Store } from '@prisma/client';
import Link from 'next/link';
import { StoreDeleteDialog } from './StoreDeleteDialog';

interface StoreItem extends Store {
  category: { name: string };
}

export function StoresTable({ stores }: { stores: StoreItem[] }) {
  return (
    <div className="border rounded-lg pb-4">
      <Table>
        <TableCaption>A list of your stores.</TableCaption>
        <TableHeader>
          <TableRow className="bg-secondary">
            <TableHead className="text-center font-semibold">#</TableHead>
            <TableHead className="font-semibold">Store Name</TableHead>
            <TableHead className="font-semibold">Domain</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stores.map((store, index) => (
            <TableRow key={store.id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell>{store.name}</TableCell>
              <TableCell>{store.domain}</TableCell>
              <TableCell>{store.category.name}</TableCell>
              <TableCell className="space-x-3">
                <Link
                  href={`/stores/edit/${store.id}`}
                  className={buttonVariants({ variant: 'secondary' })}
                >
                  Edit
                </Link>
                <StoreDeleteDialog storeName={store.name} storeId={store.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
