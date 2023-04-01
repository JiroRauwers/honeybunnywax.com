import { FC, PropsWithChildren } from 'react';

import { Transition } from 'framer-motion';

export interface InnerCarouselProps {
  $rtl?: boolean;
  $itensPerView: number;
}

export interface OuterCarouselProps {
  showOverflow?: boolean;
}

export interface ItemProps {
  test?: string;
}

export type SlidesPerView = {
  default: number;
  pc?: number;
  phone?: number;
  smPc?: number;
  tablet?: number;
  xlPc?: number;
  xlPhone?: number;
};

export type SimpleSliderProps = PropsWithChildren & {
  SlidesPerView?: SlidesPerView;
  centerMode?: boolean;
  rtl?: boolean;
  transition?: Transition;
  Buttons?: FC<unknown> | [FC<unknown>, FC<unknown>];
  limit?: boolean;

  //  disables
  disableButtons?: boolean;
  diableSlideCounter?: boolean;
};
