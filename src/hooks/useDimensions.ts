import { RefObject, useEffect, useLayoutEffect, useState } from 'react';

export function useDimensions<T extends unknown>(targetRef: RefObject<T>) {
  const getDimensions = () => {
    return {
      //@ts-expect-error dont know the ref type
      width  : targetRef.current ? targetRef.current.offsetWidth : 0,
      //@ts-expect-error dont know the ref type
      height : targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return dimensions;
}
