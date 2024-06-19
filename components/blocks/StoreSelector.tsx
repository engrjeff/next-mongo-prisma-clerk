'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { RiExpandUpDownLine } from '@remixicon/react';

export function StoreSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full" asChild>
        <button className="flex items-center justify-between p-1">
          <Avatar className="rounded border p-0.5 flex items-center justify-center">
            <AvatarImage
              src="https://abideinthevineph.org/_next/image?url=%2Fabide-logo.png&w=32&q=75"
              className="object-cover h-6 w-6"
              alt="abide in the vine ph"
            />
          </Avatar>
          <div>
            <p className="font-semibold text-sm">Abide in the Vine</p>
            <p className="text-xs text-muted-foreground">
              abideinthevineph.org
            </p>
          </div>
          <RiExpandUpDownLine className="h-4 w-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuLabel>Select Store</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Abide in the Vine</DropdownMenuItem>
        <DropdownMenuItem>Guava Electronics</DropdownMenuItem>
        <DropdownMenuItem>Epistle Co.</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
