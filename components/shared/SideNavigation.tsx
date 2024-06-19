'use client';

import { mainLinks, shopifyLinks, toolsLinks } from '@/config/navLinks';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { SideNavLink } from './SideNavLink';

export function SideNavigation() {
  return (
    <nav className="divide-y flex flex-col flex-1">
      <ul className="space-y-1.5 pb-3">
        {mainLinks.map((linkItem) => (
          <li key={`main-link-${linkItem.label}`}>
            <SideNavLink
              href={linkItem.path}
              className={cn(
                buttonVariants({
                  variant: linkItem.path === '/' ? 'secondary' : 'ghost',
                }),
                'text-sm justify-start w-full gap-2 px-2'
              )}
            >
              {linkItem.Icon} {linkItem.label}
            </SideNavLink>
          </li>
        ))}
      </ul>
      <ul className="space-y-1.5 py-3">
        <li>
          <span className="text-muted-foreground text-[11px] uppercase">
            Tools
          </span>
        </li>
        {toolsLinks.map((linkItem) => (
          <li key={`tool-link-${linkItem.label}`}>
            <SideNavLink
              href={linkItem.path}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'text-sm justify-start w-full gap-2 px-2'
              )}
            >
              {linkItem.Icon} {linkItem.label}
            </SideNavLink>
          </li>
        ))}
      </ul>

      <ul className="space-y-1.5 py-3">
        <li>
          <span className="text-muted-foreground text-[11px] uppercase">
            Shopify
          </span>
        </li>
        {shopifyLinks.map((linkItem) => (
          <li key={`shopify-link-${linkItem.label}`}>
            <SideNavLink
              href={linkItem.path}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'text-sm justify-start w-full gap-2 px-2'
              )}
            >
              {linkItem.Icon} {linkItem.label}
            </SideNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
