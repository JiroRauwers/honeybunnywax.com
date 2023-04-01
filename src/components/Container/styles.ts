import Image from 'next/image';

import styled, { css } from 'styled-components';
import { RequireOnlyOne } from 'types/OneOf';

import theme from 'styles/theme';

type sizes = Partial<
  RequireOnlyOne<{
    $sm?: boolean;
    // $md?: boolean;
    $lg?: boolean;
  }> & {
    layer: number;
  }
>;

export type ContainerSizes = sizes;

interface StyledImageProps {
  scale?: number;
  top?: `${number}%`;
  bottom?: `${number}%`;
  left?: `${number}%`;
  right?: `${number}%`;
  inset?: `${number}%`;
  cover?: boolean | string;
}

export const ContainerImage = styled(Image).attrs<StyledImageProps>(
  ({ fill, cover }) => ({
    fill  : fill || true,
    cover : cover?.toString() || `true`
  })
)<StyledImageProps>`
  scale: ${({ scale }) => scale || 1};
  ${({ top, bottom, left, right, inset, cover }) => css`
    object-fit: ${cover === `true` ? 'cover' : 'none'};

    top: ${top && `${top} !important`};
    bottom: ${bottom && `${bottom} !important`};
    right: ${right && `${right} !important`};
    left: ${left && `${left} !important`};

    inset: ${inset && `${inset} !important`};
  `}
`;

type disableOpt =
  | 'phone'
  | 'xlPhone'
  | 'pc'
  | 'tablet'
  | 'smPc'
  | 'pc'
  | 'xlpc';

export type ContainerProps = sizes & {
  $disable?: disableOpt | disableOpt[];
};
const DisableContainer = (
  size: disableOpt,
  props: ContainerProps['$disable']
) =>
  (Array.isArray(props) ? props.includes(size) : props === size)
    ? css`
        --max-width: 100%;
        --container-padding: 0rem;
      `
    : '';

export const Container = styled.div.attrs<ContainerProps>(({ layer }) => ({
  layer: layer || 0
}))<ContainerProps>`
  ${({ theme: { screen }, $sm, $lg, layer, $disable }) => css`
    position: relative;
    z-index: ${layer || 0};

    ${css`
      --calc-width: var(--max-width);
    `};
    ${$sm &&
    css`
      --calc-width: min(var(--max-width, ${screen.tablet}));
    `}
    ${$lg &&
    css`
      --calc-width: min(
        calc(max(var(--max-width), ${screen.xlPc}) * 1.1),
        100vw
      );
    `}

    max-width: var(--calc-width, 90vw);
    min-width: min(var(--calc-width, 90vw), 100vw);
    width: min(var(--calc-width, 90vw), 100vw);
    max-height: 100%;
    margin: 0 auto;
    --container-padding: 1rem;
    padding: 0 var(--container-padding);

    ${DisableContainer('phone', $disable)}

    @media (min-width: ${screen.phone}) {
      --max-width: ${$sm ? screen.phone : screen.phone};
      ${DisableContainer('phone', $disable)}
    }
    @media (min-width: ${screen.xlPhone}) {
      --max-width: ${$sm ? screen.phone : screen.xlPhone};
      ${DisableContainer('xlPhone', $disable)}
    }
    @media (min-width: ${screen.tablet}) {
      --max-width: ${$sm ? screen.xlPhone : screen.tablet};
      padding: 0;
      ${DisableContainer('tablet', $disable)}
    }
    @media (min-width: ${screen.smPc}) {
      --max-width: ${$sm ? screen.tablet : screen.smPc};
      ${DisableContainer('smPc', $disable)}
    }
    @media (min-width: ${screen.pc}) {
      --max-width: ${$sm ? screen.tablet : screen.pc};
      ${DisableContainer('pc', $disable)}
    }
    @media (min-width: ${screen.xlPc}) {
      --max-width: ${$sm ? screen.pc : screen.xlPc};
      ${DisableContainer('xlpc', $disable)}
    }
  `}
`;

export type WrapperColor = {
  $bg?: keyof typeof theme.light.colors;
};

export const ContainerBg = styled.section<WrapperColor>`
  ${({ theme, $bg }) => css`
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    position: absolute;

    height: 100%;
    z-index: ${theme.layers.background};

    cursor: none;
    pointer-events: none;
    user-select: none;

    background-color: ${$bg !== undefined && theme.colors[$bg]};
  `}
`;

export type ImageWrapperProps = {
  clip?: boolean;
  /**
   *  default: true
   */
  clipX?: boolean;
  clipY?: boolean;
};

export const ImageWrapper = styled.div.attrs<ImageWrapperProps>(
  ({ clipX }) => ({
    clipX: clipX || true
  })
)<ImageWrapperProps>`
  inset: 0;
  position: relative;
  width: inherit;
  height: inherit;
  ${({ clip, clipX, clipY }) => css`
    overflow-x: ${(clip || clipX) && 'clip'};
    overflow-y: ${(clip || clipY) && 'clip'};
  `}
`;
