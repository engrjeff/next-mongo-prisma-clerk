'use client';

import { deleteStoreAction } from '@/actions/store';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { useServerAction } from 'zsa-react';

export function StoreDeleteDialog({
  storeId,
  storeName,
}: {
  storeId: string;
  storeName: string;
}) {
  const [open, setOpen] = useState(false);

  const { isPending, execute, data, error, isError } =
    useServerAction(deleteStoreAction);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        className={isPending ? 'pointer-events-none opacity-80' : ''}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {storeName}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            store and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: 'destructive' })}
            onClick={async () => {
              const [data, err] = await execute({
                id: storeId,
              });

              if (err) {
                // handle error
                toast.error('Error deleting store.');
                return;
              }

              toast.success('Store deleted!');

              setOpen(false);
            }}
          >
            {isPending ? 'Deleting...' : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
