import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { darken, lighten, parseToRgb, rgba, shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';

import { default as dContainer } from 'components/Container';

const enterFromRight = keyframes`
 from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const exitToRight = keyframes`
 from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
`;

const exitToLeft = keyframes`
 from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
`;

const scaleIn = keyframes`
 from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

const scaleOut = keyframes`
 from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`;

export const Container = styled(dContainer)`
  margin: 0 auto;
  display: grid;
  height: var(--height);
  max-height: var(--height);
  grid-template-columns: 2fr 6fr 4fr;
`;

export const Wrapper = styled.section.attrs(() => ({ id: 'Menu' }))`
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
    width: 100%;
    position: fixed;
    --height: 3rem;
    height: var(--height);
    background-color: ${theme.colors.indianRed};
    opacity: 0.86;
    overflow: hidden;
    box-sizing: content-box;
    border-bottom: 3px solid ${theme.colors.plum};
  `}
`;

export const MenuGroup = styled.ul`
  /* padding-top: calc(var(--height) * 0.3); */
  height: var(--height);
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    opacity: 1;
    padding: 1rem;
    align-self: center;
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.thin};
    color: ${theme.colors.text};

    transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      scale: 1.2;
    }
  `}
`;

export const LogoContainer = styled(NavigationMenu.Link)`
  padding: 0 !important;
  margin: 0 !important;
`;

// .attrs(({ width, height }) => ({
//   width  : width || 101,
//   height : height || 69
// }))``

export const logo = styled(Image).attrs(({ width, height }) => {
  return {
    width  : width || 101,
    height : height || 69
  };
})``;

//  -------------------------------------------------------------------------------

export const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 101vw;
  margin: -0.5vw;
  z-index: ${({ theme }) => theme.layers.menu};

  border-bottom: 3px solid
    ${({ theme }) =>
    rgba({ ...parseToRgb(theme.colors.indianRed), alpha: 0.4 })};

  background-color: ${({ theme }) =>
    rgba({ ...parseToRgb(theme.colors.indianRed), alpha: 0.4 })};
  box-shadow: 0 2px 10px ${({ theme }) => lighten(0.4, theme.colors.text)};
`;

export const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  border-radius: 6px;
  list-style: none;
  margin: 0;
  margin-bottom: -20px;

  &:has(${LogoContainer}) {
    margin-bottom: 0% !important;
  }
`;

export const CarretIcon = styled(CaretDownIcon)`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  top: 1px;
  transition: transform 250ms ease;

  [data-state='open'] > & {
    transform: rotate(-180deg);
  }
`;

export const Arrow = styled('div')`
  position: relative;
  top: 70%;
  background-color: white;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
`;

const LinkNTrigger = css`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};

  font-size: 15px;
  text-decoration: none;
  position: relative;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => lighten(0.3, theme.colors.plum)};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => shade(0.8, theme.colors.plum)};
  }
`;

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  ${LinkNTrigger}

  gap: 2px;
`;

export const NavigationMenuLink = styled(NavigationMenu.Link)`
  ${LinkNTrigger}
`;

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${enterFromLeft};
  }
  &[data-motion='from-end'] {
    animation-name: ${enterFromRight};
  }
  &[data-motion='to-start'] {
    animation-name: ${exitToLeft};
  }
  &[data-motion='to-end'] {
    animation-name: ${exitToRight};
  }

  @media only screen and (min-width: 600px) {
    width: auto;
  }
`;

export const NavigationMenuIndicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;

  animation-duration: 250ms;
  animation-timing-function: ease;
  [data-state='visible'] {
    animation-name: ${scaleIn};
  }
  [data-state='hidden'] {
    animation-name: ${scaleOut};
  }
`;

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: ${scaleIn} 200ms ease;
  }
  &[data-state='closed'] {
    animation: ${scaleOut} 200ms ease;
  }
  @media only screen and (min-width: 600px) {
    width: var(--radix-navigation-menu-viewport-width);
  }
`;

const BaseList = css`
  display: grid;
  padding: 22px;
  margin: 0;
  column-gap: 10px;
  list-style: none;
`;

export const ListOne = styled.ul`
  ${BaseList}
  @media only screen and (min-width: 600px) {
    width: min(600px, 80vw);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListTwo = styled.ul`
  ${BaseList}
  @media only screen and (min-width: 600px) {
    width: 600px;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export interface ListItemProps extends PropsWithChildren<JSX.Element['props']> {
  title: string;
}

export const ListItemLink = styled(Link)<ListItemProps>`
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1;
  height: 100%;

  &:focus {
    box-shadow: 0 0 0 2px red;
  }

  &:hover {
    background-color: ${({ theme }) => lighten(0.4, theme.colors.plum)};
  }
`;

export const ListItemHeading = styled.div`
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ListItemText = styled.p`
  color: ${({ theme }) => lighten(0.5, theme.colors.text)};
  line-height: 1.4;
  font-weight: initial;
`;

export const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;

  @media only screen and (max-width: 750px) {
    justify-content: center;
  }
`;

// ------------------------------- MOBILE
export const mobileNavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  border-radius: 6px;
  list-style: none;
  margin: 0;
  margin-bottom: -20px;

  &:has(${LogoContainer}) {
    margin-bottom: 0% !important;
  }

  svg {
    color: white;
  }
`;

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes` 
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: black;
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 500ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: ${({ theme }) => theme.layers.alwaysOnTop - 1};
`;

export const DialogContent = styled(Dialog.Content)`
  z-index: ${({ theme }) => theme.layers.alwaysOnTop};

  background-color: ${({ theme }) => theme.colors.indianRed};
  color: ${({ theme }) => theme.colors.text};

  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 100vh;

  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  > div {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const DialogCloseBtn = styled(Dialog.Close)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem;
  width: 15px;
  height: 15px;
  scale: 2;
`;

export const ListMobile = styled('ul')`
  ${BaseList}

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    width: min(600px, 80vw);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MobileLink = styled(NavigationMenu.Link)`
  ${LinkNTrigger}
  justify-content: center;
  font-weight: ${({ theme }) => theme.font.normal};
`;

export const MobileHeading = styled.div`
  font-weight: ${({ theme }) => theme.font.thin};
  color: ${({ theme }) => darken(0.2, theme.colors.text)};
  line-height: 1.2;
`;

/// ----------------- CONTAIENR

export const NavContainer = styled(dContainer)`
  display: flex;
  justify-content: space-between;

  div:has(${NavigationMenuList}):not(:has(${LogoContainer})) {
    display: flex;
    align-items: center;
    /* margin-top: 1.5rem; */

    @media only screen and (max-width: 760px) {
      display: none;
    }
  }

  div:has(${mobileNavigationMenuList}) {
    @media only screen and (min-width: 760px) {
      display: none;
    }
  }
`;
