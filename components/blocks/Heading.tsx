'use client';

import { useUser } from '@clerk/nextjs';
import { useSelectedLayoutSegments } from 'next/navigation';

const headingTextMap = {
  stores: {
    title: 'Stores',
    subtitle: 'View and manage your stores.',
  },
  'stores/new': {
    title: 'Add New Store',
    subtitle: 'Create a new store record.',
  },
  'stores/edit': {
    title: 'Edit Store',
    subtitle: 'Update an existing store record.',
  },
};

export function Heading() {
  const { user } = useUser();

  const segments = useSelectedLayoutSegments();

  const path = segments.slice(0, 2).join('/');

  if (path === 'dashboard')
    return (
      <div>
        <p className="text-2xl font-semibold">
          Good morning, {user?.firstName}
        </p>
        <p className="text-muted-foreground text-sm">
          {"Here's a summary of your store analytics for Abide in the Vine."}
        </p>
      </div>
    );

  const heading = headingTextMap[path as keyof typeof headingTextMap];

  if (!heading) return null;

  return (
    <div>
      <p className="text-2xl font-semibold">{heading.title}</p>
      <p className="text-muted-foreground text-sm">{heading.subtitle}</p>
    </div>
  );
}
