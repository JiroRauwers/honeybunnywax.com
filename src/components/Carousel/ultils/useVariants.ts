import { useEffect, useState } from 'react';

import { Variants } from 'framer-motion';
import { useWindowSize } from 'hooks/useWindowSize';

export const useVariants = (
  SlidesPerView: number,
  items: Element[],
  centerMode: boolean,
  limit?: boolean
): [Variants] => {
  const windowSize = useWindowSize();
  const calcVariants = () => {
    if (!items.length) return {} as Variants;

    let acumulatedWidth =
      centerMode && SlidesPerView !== 1
        ? SlidesPerView % 2 === 0
          ? -items[0].clientWidth / 2
          : -items[0].clientWidth
        : 0;
    const variObj: Variants = {};

    items.forEach((e, i) => {
      if (limit && SlidesPerView + i >= items.length + 1 && i !== 0) {
        variObj[i] = {
          // @ts-expect-error variant dont know that x exists
          x: variObj[i - 1].x
        };
        return variObj;
      }
      variObj[i] = {
        x: -acumulatedWidth
      };
      acumulatedWidth += e.clientWidth;
    });

    return variObj;
  };

  const [variants, setVariants] = useState<Variants>(calcVariants);

  useEffect(() => {
    setVariants(calcVariants);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, centerMode, SlidesPerView, windowSize]);

  return [variants];
};
