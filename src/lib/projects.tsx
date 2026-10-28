import React from 'react';

export const PROJECT_LOGOS = {
  topper: 'https://topper-mc.github.io/Assets/topper/logo.svg',
  timedtopper: 'https://topper-mc.github.io/Assets/timedtopper/logo.svg',
  grouptopper: 'https://topper-mc.github.io/Assets/grouptopper/logo.svg',
  cachy: 'https://topper-mc.github.io/Assets/topper/logo.svg',
} as const;

export type ProjectKey = keyof typeof PROJECT_LOGOS;

export interface ProjectInfo {
  id: ProjectKey;
  title: string;
  description: string;
  url: string;
  logo: string;
}

export const PROJECTS: ProjectInfo[] = [
  {
    id: 'topper',
    title: 'Topper',
    description: 'The core, high-performance leaderboard plugin for Minecraft servers. Track, sort, and display any player statistics.',
    url: '/topper/',
    logo: PROJECT_LOGOS.topper,
  },
  {
    id: 'timedtopper',
    title: 'TimedTopper',
    description: 'Timed leaderboard addon for Topper. Reset stats periodically and distribute rewards automatically to top players.',
    url: '/timedtopper/',
    logo: PROJECT_LOGOS.timedtopper,
  },
  {
    id: 'grouptopper',
    title: 'GroupTopper',
    description: 'Group leaderboard addon for Topper. Calculate ranking metrics based on Towny, Factions, Parties, or LuckPerms groups.',
    url: '/grouptopper/',
    logo: PROJECT_LOGOS.grouptopper,
  },
  {
    id: 'cachy',
    title: 'Cachy',
    description: 'High-performance player data caching mod/plugin. Efficiently store online player metrics with zero lag.',
    url: '/cachy/',
    logo: PROJECT_LOGOS.cachy,
  },
];

export function resolveProjectLogo(name?: string): string | undefined {
  if (!name) return undefined;
  const key = name.toLowerCase() as ProjectKey;
  return PROJECT_LOGOS[key];
}

export function getProjectFromPathname(pathname: string): ProjectInfo {
  const normalized = (pathname || '').toLowerCase();
  const segments = normalized.split('/').filter(Boolean);

  for (const segment of segments) {
    const project = PROJECTS.find((p) => p.id === segment);
    if (project) return project;
  }

  for (const project of PROJECTS) {
    if (normalized.includes(`/${project.id}`) || normalized.startsWith(project.id)) {
      return project;
    }
  }

  return PROJECTS[0]!;
}

export function ProjectIcon({
  project,
  className = 'size-full',
  alt,
}: {
  project: string;
  className?: string;
  alt?: string;
}): React.JSX.Element | null {
  const logo = resolveProjectLogo(project);
  if (!logo) return null;
  return (
    <img
      src={logo}
      alt={alt ?? `${project} Logo`}
      className={className}
    />
  );
}

export function resolveProjectIcon(
  icon?: string,
  className = 'size-full'
): React.JSX.Element | undefined {
  const logo = resolveProjectLogo(icon);
  if (!logo) return undefined;
  return (
    <img
      src={logo}
      alt={icon ?? 'Project Logo'}
      className={className}
    />
  );
}
