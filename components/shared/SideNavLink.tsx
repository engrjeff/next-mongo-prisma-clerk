'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '../ui/button';

export function SideNavLink({
  className,
  href,
  ...rest
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();

  const isActive =
    pathname.includes(href as string) && href.toString().length !== 1;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: isActive ? 'default' : 'ghost',
        }),
        'text-sm justify-start w-full gap-2 px-2',
        className
      )}
      {...rest}
    />
  );
}
