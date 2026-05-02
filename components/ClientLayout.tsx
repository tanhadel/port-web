'use client';

import { useSmoothScroll, usePageTransition } from '@/lib/hooks';
import DarkModeToggle from './DarkModeToggle';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  usePageTransition();

  return (
    <>
      {children}
    </>
  );
}
