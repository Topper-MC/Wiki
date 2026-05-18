import { useStoreValue } from '@site/src/stores/queryStore';

interface QueryVarProps {
  field: 'holder' | 'position';
}

export default function QueryVar({ field }: QueryVarProps) {
  const value = useStoreValue(field);
  return <span>{value}</span>;
}
