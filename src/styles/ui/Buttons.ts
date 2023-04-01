import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const BaseBtnCss = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.indianRed};
    color: ${theme.colors.text};
    --padding-x: 2rem;
    --padding-y: 1rem;
    padding: var(--padding-y) var(--padding-x);
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
  `}
`;

export const BaseBtn = styled(motion.button).attrs(
  ({ whileTap, whileHover, transition }) => ({
    whileTap   : whileTap || { scale: 0.9 },
    whileHover : whileHover || { scale: 1.1 },
    transition : transition || {
      type      : 'spring',
      damping   : 20,
      stiffness : 300
    }
  })
)`
  ${BaseBtnCss}
`;
