'use client';

import { Input } from '@/components/ui/input';
import { RiSearchLine } from '@remixicon/react';

export function SearchField() {
  return (
    <div className="relative">
      <RiSearchLine className="size-4 text-muted-foreground absolute top-1/2 left-2 -translate-y-1/2" />
      <Input type="search" placeholder="Search" className="pl-8" />
    </div>
  );
}
