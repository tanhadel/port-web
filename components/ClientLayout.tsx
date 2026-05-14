'use client';

import { useSmoothScroll, usePageTransition } from '@/lib/hooks';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  usePageTransition();

  return (
    <>
      {children}
    </>
  );
}
