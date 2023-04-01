import { MutableRefObject, useEffect, useMemo, useState } from 'react';

export const useInViewPort = (ref: MutableRefObject<unknown>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      typeof window === 'undefined'
        ? null
        : new IntersectionObserver(([entry]) => {
          console.log('observing', ref);
          return setIsIntersecting(entry.isIntersecting);
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!observer || !ref || !ref.current) return;
    observer.observe(ref.current as unknown as Element);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
