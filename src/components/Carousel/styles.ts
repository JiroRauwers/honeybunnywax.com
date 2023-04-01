import { motion } from 'framer-motion';
import { lighten, transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { InnerCarouselProps, OuterCarouselProps } from './types';
/*
  ${({ theme }) => css``}
*/

export const OuterCarousel = styled(motion.div)<OuterCarouselProps>`
  ${({ showOverflow }) => css`
    --clip-x: ${showOverflow ? 'unset' : ' clip'};
    --clip-y: ${showOverflow ? 'unset' : ' unset'};
  `}

  overflow-x: var(--clip-x);
  overflow-y: var(--clip-y);
  cursor: grab;
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const InnerCarousel = styled(motion.div).attrs<InnerCarouselProps>(
  ({ $rtl }) => ({
    $rtl: $rtl || false
  })
)<InnerCarouselProps>`
  display: flex;
  flex-direction: ${({ $rtl }) => $rtl && 'row-reverse'};

  --itens-per-view: ${({ $itensPerView }) => $itensPerView};
`;

export const Item = styled(motion.div)`
  --paddings: 20px;
  --margin: 0;

  padding: var(--paddings);

  --calc-width: calc(100% / var(--itens-per-view));

  min-width: var(--calc-width);

  width: max(var(--calc-width, fit-content));

  scale: var(--carrousel-scale, 1);
  item > * {
    pointer-events: none;
  }
`;

export const CenterDiv = styled('div')`
  position: absolute;

  top: 0;
  left: 50%;
  transform: translateX(-50%);

  height: 100%;
  width: calc(100% / 3);

  pointer-events: none;

  border: 2px solid black;
`;

export const DotContainer = styled('ul')`
  height: 1.4rem;
  border-radius: 9999px;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0.3rem 0.4rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  // debug
  background-color: ${lighten(0.3, '#000')};
`;

export const Dots = styled(motion.button)`
  aspect-ratio: 1/1;
  height: 90%;
  background-color: #ffffff33;
  align-self: center;
  margin: 0.2rem;
  border-radius: 100%;
  transition: all ease-in-out 300ms;
  overflow: hidden;
`;

export const DotProgress = styled(motion.div)`
  height: 100%;
  width: 100%;
  align-self: flex-start;
  background-color: #ffffffaa;
  border-radius: 100%;
`;

export const PrevNextBtn = styled(motion.button)`
  border-radius: 100%;
  --size: 30px;
  width: fit-content;
  aspect-ratio: 1;
  color: whitesmoke;

  z-index: ${({ theme }) => theme.layers.base};

  padding: 0.4rem;
  background-color: ${transparentize(0.4, '#000')};
  display: flex;

  position: absolute;
  top: calc(50% - var(--size) / 2);

  &:disabled {
    display: none;
  }

  &[data-dir='prev'] {
    left: 0;
    transform-origin: left;
  }
  &[data-dir='next'] {
    right: 0;
    transform-origin: right;
  }

  svg {
    justify-self: center;
    width: var(--size);
    height: var(--size);
  }
`;
