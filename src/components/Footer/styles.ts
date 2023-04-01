import Image from 'next/image';

import styled, { css } from 'styled-components';

/*
  ${({ theme }) => css``}
*/

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.text};
    align-items: center;
    text-align: center;
    @media screen and (min-width: ${theme.screen.xlPhone}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      text-align: start;
    }
  `}
`;

export const col = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: ${theme.font.sizes.md};
    font-weight: ${theme.font.thin};
    padding-top: 2rem;
    line-height: 1.6rem;
  `}
`;

export const BottomWrapper = styled(Wrapper)`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.screen.xlPhone}) {
    justify-content: space-between;
  }
`;

export const Logo = styled(Image).attrs(() => ({ width: 127, height: 87 }))`
  width: 130px;
  filter: brightness(0) invert(1);
`;

export const BottomFooterText = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.thin};
    align-items: center;

    // logo central
    & img {
      margin-left: 0.4rem;
    }
  `}
`;

export const Social = styled('div')`
  margin: 0.4rem 0;

  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  & > * {
    flex-basis: 30%;
  }
`;
