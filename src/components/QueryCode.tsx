
interface QueryCodeProps {
  type?: 'global' | 'player';
  p?: {
    playerPrefix?: string;
    playerSuffix?: string;
    globalPrefix?: string;
    globalSuffix?: string;
  };
  children: React.ReactNode;
}

export default function QueryCode({ type = 'global', p = {}, children }: QueryCodeProps) {
  const prefix = type === 'player' ? (p.playerPrefix || '') : (p.globalPrefix || '');
  const suffix = type === 'player' ? (p.playerSuffix || '') : (p.globalSuffix || '');
  return (
    <code>
      {prefix}
      {children}
      {suffix}
    </code>
  );
}
