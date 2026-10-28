'use client';

import React from 'react';
import { usePathname } from 'fumadocs-core/framework';
import { ProjectIcon, getProjectFromPathname } from '@/lib/projects';

export function NavTitle(): React.JSX.Element {
  const pathname = usePathname();
  const current = getProjectFromPathname(pathname);

  return (
    <>
      <ProjectIcon project={current.id} className="size-5" />
      <span>{current.title}</span>
    </>
  );
}
