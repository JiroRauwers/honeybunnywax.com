import styled, { css, DefaultTheme } from 'styled-components';

/*
  ${({ theme }) => css``}
*/
interface HeadersProps {
  uppercase?: true;
  wFull?: true;
  color?: keyof DefaultTheme['colors'];
  disablePadding?: true | 'bottom' | 'top';
  theme: DefaultTheme;
  center?: true;
}

const Header = ({
  theme,
  uppercase,
  wFull,
  color,
  disablePadding,
  center
}: HeadersProps) => css`
  text-transform: ${uppercase && 'uppercase'};
  width: ${wFull && '100%'};
  color: ${color ? theme.colors[color] : theme.colors['text']};
  text-align: ${center && 'center'};

  padding-top: ${disablePadding === true || disablePadding === 'top'
    ? 0
    : 'var(--padding-y)'};
  padding-bottom: ${disablePadding === true || disablePadding === 'bottom'
    ? 0
    : 'var(--padding-y)'};

  word-wrap: normal;
  word-break: keep-all;

  font-weight: ${theme.font.light};

  --fs: min(var(--font-size), 10vw);
  font-size: min(var(--fs), 6vw);
  /* vars to use */
  --bold-weight: ${theme.font.bold};
  --padding-y: 5rem;

  ${ApplyStrong};
`;

const ApplyStrong = css`
  b,
  strong {
    font-weight: var(--bold-weight);
    font-size: calc(var(--fs) * 1.2);
  }
`;

export const H1 = styled.h1<HeadersProps>`
  --font-size: ${({ theme }) => theme.font.sizes.px(48)};
  ${Header}
`;
export default H1;
export const H2 = styled.h2<HeadersProps>`
  --font-size: ${({ theme }) => theme.font.sizes['4xl']};
  ${Header}
`;

export const H3 = styled.h3<HeadersProps>`
  --font-size: ${({ theme }) => theme.font.sizes['2xl']};
  ${Header}
`;

export const H4 = styled.h4<HeadersProps>`
  --font-size: ${({ theme }) => theme.font.sizes.xl};
  ${Header}
`;

export const H5 = styled.h5<HeadersProps>`
  --font-size: ${({ theme }) => theme.font.sizes.lg};
  ${Header}
`;

export const H6 = styled.h6<HeadersProps>`
  --font-size: ${({ theme }) => theme.font.sizes.md};
  ${Header}
`;
