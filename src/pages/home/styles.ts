import { darken } from 'polished';
import styled, { css } from 'styled-components';

import H1, { H2, H3 } from 'styles/ui/Headers';

export const ImageWrapper = styled('div')`
  position: relative;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

export const FlexWrapper = styled('div')`
  display: flex;
`;

export const SectionArea = styled('div')<{ rtl?: boolean }>`
  ${({ rtl }) => css`
    padding: 3rem;
    min-height: 45vh;
    text-align: ${rtl && 'right'};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const SectionItemArea = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 60vh;

    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    @media only screen and (min-width: ${theme.screen.xlPhone}) {
      flex-direction: row;
      min-height: 20vh;
    }
  `}
`;

export const Text = styled(H3)<{ dark?: boolean; bold?: boolean }>`
  ${({ theme, dark, bold }) => css`
    padding: 0;
    color: ${dark ? darken(0.6, theme.colors.greyBlue) : theme.colors.greyBlue};
    font-weight: ${bold && theme.font.bold};
  `}
`;

export const ItemText = styled(H3)`
  ${({ theme }) => css`
    text-transform: uppercase;
    padding: 0;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.greyBlue};
  `}
`;

export const SectionItem = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    color: ${theme.colors.greyBlue};

    align-items: center;
    svg {
      height: 70px;
      scale: 4;
    }
  `}
`;

export const SectionTItle = styled(H2)<{ dark?: boolean }>`
  ${({ theme, dark }) => css`
    text-transform: capitalize;
    padding: 0;
    font-weight: ${theme.font.bold};
    color: ${dark ? darken(0.6, theme.colors.greyBlue) : theme.colors.greyBlue};
  `}
`;

export const Hero = styled('div')`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeroTitle = styled(H1)`
  ${({ theme }) => css`
    padding: 0;
    font-weight: ${theme.font.bolder};
    color: ${theme.colors.greyBlue};
  `}
`;

export const HeroSub = styled(H2)`
  ${({ theme }) => css`
    padding: 0;
    font-weight: ${theme.font.light};
    color: ${theme.colors.greyBlue};
  `}
`;
