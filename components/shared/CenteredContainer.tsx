import { ReactNode } from 'react';

export function CenteredContainer({ children }: { children: ReactNode }) {
  return (
    <div className="container h-screen min-h-screen grid place-items-center">
      {children}
    </div>
  );
}
