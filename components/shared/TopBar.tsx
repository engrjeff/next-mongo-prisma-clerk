import { UserButton } from '@clerk/nextjs';
import { Heading } from '../blocks/Heading';
import { ThemeToggler } from './ThemeToggler';

export function TopBar() {
  return (
    <div className="flex p-6">
      <Heading />
      <div className="flex items-center gap-3 ml-auto">
        <ThemeToggler />
        <UserButton />
      </div>
    </div>
  );
}
