'use client';

import { useSmoothScroll, useSectionAnimation, usePageTransition } from '@/lib/hooks';
import ThemePanel from './ThemePanel';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  useSectionAnimation();
  usePageTransition();

  return (
    <>
      <ThemePanel />
      {children}
    </>
  );
}
