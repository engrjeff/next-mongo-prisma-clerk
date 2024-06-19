import { Sidebar } from '@/components/shared/Sidebar';
import { TopBar } from '@/components/shared/TopBar';
import React from 'react';

export default function PulseAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className="pl-72 min-h-screen bg-background">
        <TopBar />
        {children}
      </main>
    </>
  );
}
