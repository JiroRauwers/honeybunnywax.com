import { Children, FC, useRef } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useCalcState } from 'hooks/useCalcState';

import * as S from './styles';
import { SimpleSliderProps } from './types';
import { useScrollSlideControll } from './ultils/useScrollSlideControll';
import { useSelection } from './ultils/useSelection';
import { useSlidePerView } from './ultils/useSlidePerview';
import { useVariants } from './ultils/useVariants';

const Carousel: FC<SimpleSliderProps> = ({
  children,
  rtl,
  centerMode: _centerMode,
  SlidesPerView: _slidesPerView = { default: 1, xlPhone: 2, smPc: 3 },
  transition,
  Buttons = S.PrevNextBtn as (typeof motion)['button'],
  limit = true,

  // disable stuff
  disableButtons,
  diableSlideCounter: disableSlideCounter
}) => {
  const carousel = useRef<HTMLDivElement>(null),
        innerCarousel = useRef<HTMLDivElement>(null),
        [items] = useCalcState(() => {
          if (!innerCarousel || !innerCarousel.current) return [];
          if (!innerCarousel.current.firstElementChild) return [] as Element[];

          const children: Element[] = [];

          children.push(innerCarousel.current.firstElementChild as Element);

          for (let i = 0; i < innerCarousel.current.childElementCount - 1; i++) {
            const sibling = children[i]?.nextElementSibling;
            children.push(sibling as Element);
          }
          return children;
        }, [children, innerCarousel]);

  const [SlidesPerView] = useSlidePerView(_slidesPerView),
        [centerMode] = useCalcState(
          () => _centerMode || SlidesPerView === 1,
          [SlidesPerView, _centerMode]
        );
  const [variants] = useVariants(SlidesPerView, items, centerMode, limit);
  const [selected, setSelected] = useSelection(items);
  const [controls, calcFocus, focus] = useScrollSlideControll(
    items,
    selected,
    children,
    setSelected,
    variants
  );

  const [DisableNextBtn] = useCalcState(
    () =>
      !limit
        ? selected === 0
        : rtl
          ? false
          : selected + SlidesPerView >= items.length,
    [selected, SlidesPerView, items]
  ),
        [DisablePrevBtn] = useCalcState(
          () =>
            !limit
              ? true
              : rtl
                ? false
                : items.length > SlidesPerView
                  ? selected === 0
                  : true,
          [selected, SlidesPerView, items]
        );

  const defaultTransition = {
    type    : 'spring',
    bounce  : 0.05,
    damping : 15
  };

  const [Transition] = useCalcState(
    () => ({
      ...defaultTransition,
      ...transition
    }),
    [transition]
  );

  return (
    <>
      <S.OuterCarousel ref={carousel}>
        <S.InnerCarousel
          $itensPerView={SlidesPerView}
          ref={innerCarousel}
          drag="x"
          animate={controls}
          variants={variants}
          $rtl={rtl}
          onDragEnd={calcFocus}
          whileTap={{ cursor: 'grabbing' }}
          transition={Transition}
        >
          {children &&
            Children.toArray(children).map((child, i) => (
              <Item key={i} id={i.toString()}>
                {child}
              </Item>
            ))}
        </S.InnerCarousel>
        {!disableButtons &&
          (Array.isArray(Buttons)
            ? Buttons.map((Btn, i) => (
              <Btn
                key={i}
                // @ts-expect-error the props are not changing this state
                onClick={() => focus(selected + (i === 0 ? -1 : +1))}
                disabled={i === 0 ? DisablePrevBtn : DisableNextBtn}
                data-dir={i === 0 ? 'prev' : 'next'}
              />
            ))
            : Buttons &&
              Array.from({ length: 2 }).map((_, i) => (
                <Buttons
                  whileHover={{
                    scale: 1.2
                  }}
                  whileTap={{
                    scale: 1
                  }}
                  key={i}
                  disabled={i === 0 ? DisablePrevBtn : DisableNextBtn}
                  onClick={() => focus(selected + (i === 0 ? -1 : +1))}
                  data-dir={i === 0 ? 'prev' : 'next'}
                >
                  {i === 0 ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </Buttons>
              )))}
        {!disableSlideCounter && (
          <S.DotContainer>
            {Children.toArray(children).map((_c, i) => (
              <S.Dots
                key={i}
                onClick={() => focus(i)}
                data-active={i === selected}
                animate={{
                  scale: i === selected ? 1.2 : 1
                }}
              >
                <S.DotProgress
                  animate={{
                    scale: i === selected ? 1 : 0
                  }}
                />
              </S.Dots>
            ))}
          </S.DotContainer>
        )}
      </S.OuterCarousel>
    </>
  );
};

export default Carousel;
export const Item = S.Item;
