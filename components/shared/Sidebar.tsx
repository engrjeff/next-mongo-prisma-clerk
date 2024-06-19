'use client';

import { StoreSelector } from '../blocks/StoreSelector';
import { OtherLinks } from './OtherLinks';
import { SearchField } from './SearchField';
import { SideNavigation } from './SideNavigation';
import { UserMenu } from './UserMenu';

export function Sidebar() {
  return (
    <div className="fixed min-h-screen inset-y-0 w-72 bg-background p-4 space-y-4 border-r flex flex-col overflow-y-auto">
      <StoreSelector />
      <SearchField />
      <SideNavigation />
      <div className="mt-auto divide-y">
        <OtherLinks />
        <UserMenu />
      </div>
    </div>
  );
}
