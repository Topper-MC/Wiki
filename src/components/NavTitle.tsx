'use client';

import React from 'react';
import { usePathname } from 'fumadocs-core/framework';
import { ProjectIcon, PROJECTS } from '@/lib/projects';

export function NavTitle(): React.JSX.Element {
  const pathname = usePathname();
  const current =
    PROJECTS.find((p) => pathname.startsWith(p.url)) ?? PROJECTS[0]!;

  return (
    <>
      <ProjectIcon project={current.id} className="size-5" />
      <span>{current.title}</span>
    </>
  );
}
