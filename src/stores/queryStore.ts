import { useState, useEffect } from 'react';

const state = {
  holder: 'money',
  position: '1'
};

const listeners = new Set<() => void>();

export function setStoreValue(key: 'holder' | 'position', value: string) {
  state[key] = value;
  listeners.forEach((listener) => listener());
}

export function useStoreValue(key: 'holder' | 'position'): string {
  const [val, setVal] = useState(state[key]);

  useEffect(() => {
    const handleUpdate = () => setVal(state[key]);
    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, [key]);

  return val;
}
