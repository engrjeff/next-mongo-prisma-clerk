import { Button, buttonVariants } from '@/components/ui/button';
import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="container py-20">
        <h1 className="font-bold text-3xl">Pulse</h1>
        <p className="text-muted-foreground">Some tag line here.</p>
        <SignedIn>
          <div className="mt-6 space-x-4">
            <SignOutButton>
              <Button>Sign Out</Button>
            </SignOutButton>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: 'outline' })}
            >
              Dashboard
            </Link>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="mt-6 space-x-4">
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({ variant: 'outline' })}
            >
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </div>
    </main>
  );
}
