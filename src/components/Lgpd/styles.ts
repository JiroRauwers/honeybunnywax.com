import { motion } from 'framer-motion';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { BaseBtn } from 'styles/ui/Buttons';

/*
  ${({ theme }) => css``}
*/

export const Fixed = styled(motion.div)`
  ${({ theme }) => css`
    position: fixed;
    float: left;
    bottom: 1rem;
    width: 95vw;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${({ theme }) => theme.layers.alwaysOnTop};

    box-shadow: 0 2px 10px ${lighten(0.2, theme.colors.text)};

    backdrop-filter: blur(10px);

    border-bottom: 3px solid ${theme.colors.plum};
    border-radius: 10px;

    padding: 1rem;
    border-radius: 10px;
    overflow: hidden;

    color: ${theme.colors.text};

    display: flex;
    flex-direction: column;

    & > div {
      flex-grow: 1;
    }
    @media only screen and (min-width: ${theme.screen.xlPhone}) {
      width: 60vw;
    }
  `}
`;
export const Btn = styled(BaseBtn)`
  ${({ theme }) => css`
    box-shadow: 0 2px 10px ${lighten(0.2, theme.colors.text)};
    & ~ & {
      background-color: ${theme.colors.plum};
    }
  `}
}`;

export const ButtonWrapper = styled('div')`
  ${({ theme }) => css`
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;

    @media only screen and (min-width: ${theme.screen.xlPhone}) {
      height: 100%;
      gap: 2rem;
      justify-content: center;
    }
  `}
`;

export const Bg = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.7;
    top: 0;
    left: 0;
    /* backdrop-filter: blur(20px); */
    background-color: ${theme.colors.indianRed};
  `}
`;
