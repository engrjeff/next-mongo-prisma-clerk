import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function AddStoreButton() {
  return (
    <Link href="/stores/new" className={cn(buttonVariants(), 'inline-flex')}>
      <PlusCircledIcon className="size-4 mr-3" />
      New Store
    </Link>
  );
}
