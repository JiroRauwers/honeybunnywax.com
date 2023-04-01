import { Children, PropsWithChildren, useEffect, useState } from 'react';

import {
  AnimationControls,
  PanInfo,
  useAnimation,
  Variants
} from 'framer-motion';
import { useWindowSize } from 'hooks/useWindowSize';

export const useScrollSlideControll = (
  items: Element[],
  selected: number,
  children: PropsWithChildren['children'],
  setSelected: (i: number) => void,
  variants: Variants
): [
  AnimationControls,
  (e: Event, info: PanInfo) => void,
  (i: number) => void
] => {
  const { width } = useWindowSize();

  const CalcChildren = () => Children.toArray(children).length;

  const [nOfChildren, setNOfChildren] = useState(CalcChildren);

  useEffect(() => {
    setNOfChildren(CalcChildren);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  const controls = useAnimation();

  const CalcScrollSlide = (i: number, info: PanInfo) => {
    if (!items.length) return i;
    if (i < 0 || i >= nOfChildren) return i;

    const dir = info.offset.x < 0 ? 1 : -1;
    let offset = Math.abs(info.offset.x),
        jump = dir;

    for (
      let index = 0;
      index + i < items.length && i - Math.abs(index) > 0;
      index += dir
    ) {
      const tempWidth = items[i + index].clientWidth;

      offset -= tempWidth;

      if (offset < 0) break;

      jump += dir;
    }
    const TotalIndex = i + jump;
    if (TotalIndex > nOfChildren - 1) jump = nOfChildren - i - 1;
    else if (TotalIndex < 0) jump = -i; // == jump to 0

    return i + jump; // new Total index
  };

  const focus = (i: number) => {
    if (i < 0 || i >= nOfChildren) i = selected;
    controls.start(i.toString());
    setSelected(i);
  };

  const calcFocus = (e: Event, info: PanInfo) => {
    focus(CalcScrollSlide(selected, info));
  };

  useEffect(() => {
    focus(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, variants]);
  return [controls, calcFocus, focus];
};
