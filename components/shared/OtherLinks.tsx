import { miscLinks } from '@/config/navLinks';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { SideNavLink } from './SideNavLink';

export function OtherLinks() {
  return (
    <ul className="space-y-1.5 py-3">
      {miscLinks.map((linkItem) => (
        <li key={`misc-link-${linkItem.label}`}>
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
  );
}
