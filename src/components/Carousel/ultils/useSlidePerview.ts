import { useEffect, useState } from 'react';

import { useWindowSize } from 'hooks/useWindowSize';

import theme from 'styles/theme';

import { SlidesPerView } from '../types';

const { screen } = theme.base;

export const useSlidePerView = (SlidesPerView: SlidesPerView): [number] => {
  const windowSize = useWindowSize();

  const getThemeSize = (key: keyof typeof screen) =>
    Number(screen[key as keyof typeof screen].split('px')[0]);

  const checkKey = (key: keyof SlidesPerView) =>
    windowSize.width &&
    windowSize.width > getThemeSize(key as keyof typeof screen);

  const calcSlidesPerView = (): number => {
    if (SlidesPerView.xlPc && checkKey('xlPc')) return SlidesPerView.xlPc;
    if (SlidesPerView.pc && checkKey('pc')) return SlidesPerView.pc;
    if (SlidesPerView.smPc && checkKey('smPc')) return SlidesPerView.smPc;
    if (SlidesPerView.tablet && checkKey('tablet')) return SlidesPerView.tablet;
    if (SlidesPerView.xlPhone && checkKey('xlPhone'))
      return SlidesPerView.xlPhone;
    if (SlidesPerView.phone && checkKey('phone')) return SlidesPerView.phone;

    return SlidesPerView.default;
  };
  const [slides, setSlides] = useState<number>(calcSlidesPerView);

  useEffect(() => {
    setSlides(calcSlidesPerView());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize, SlidesPerView]);

  return [slides];
};
