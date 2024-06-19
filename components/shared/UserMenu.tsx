'use client';

import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarImage } from '../ui/avatar';

export function UserMenu() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-3 pt-3">
      <Avatar className="rounded-full size-8">
        <AvatarImage
          src={user?.imageUrl}
          className="object-cover size-full"
          alt={user?.fullName ?? ''}
        />
      </Avatar>
      <div>
        <p className="font-semibold text-sm">{user?.fullName}</p>
        <p className="text-xs text-muted-foreground">
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>
    </div>
  );
}
