import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Buttom = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.light};

    background-color: ${theme.colors.indianRed};

    color: ${theme.colors.text};
  `};

  padding: 0.8rem 1.5rem;

  width: fit-content;
  height: fit-content;

  transition: ease-in-out 300ms all;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.indianRed)};
    transform: scale(1.2);
  }
`;
