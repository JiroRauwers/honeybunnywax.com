import { useEffect, useState } from 'react';

export const useCalcState = <T, args extends unknown[]>(
  fn: (...args: args | undefined[]) => T,
  dep: unknown[] = []
): [T, (...args: args) => void] => {
  const [value, setValue] = useState(fn);

  useEffect(() => {
    setValue(fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep);

  const setValueFn = (...args: args) => setValue(fn(...args));

  return [value, setValueFn];
};
