import { forwardRef } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import * as S from './styles';

const Menu = () => {
  return (
    <S.NavigationMenuRoot>
      <S.NavContainer>
        <S.NavigationMenuList>
          <NavigationMenu.Item>
            <S.LogoContainer href="/">
              <S.logo src={'assets/logo.svg'} alt={'logo'} />
            </S.LogoContainer>
          </NavigationMenu.Item>
        </S.NavigationMenuList>

        <S.mobileNavigationMenuList>
          {/*  MOBILE MENU */}
          <Dialog.Root>
            <NavigationMenu.Item>
              <Dialog.Trigger>
                <HamburgerMenuIcon width={30} height={30} />
              </Dialog.Trigger>
            </NavigationMenu.Item>
            <Dialog.Portal>
              <S.DialogOverlay />
              <S.DialogContent className="DialogContent">
                <div>
                  <S.DialogCloseBtn>
                    <Cross2Icon />
                  </S.DialogCloseBtn>
                  <S.ListMobile>
                    <NavigationMenu.Item>
                      <S.MobileLink href="/">menu</S.MobileLink>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                      <S.MobileLink href="/">menu</S.MobileLink>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                      <S.MobileLink href="/">menu</S.MobileLink>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                      <S.MobileLink href="/">menu</S.MobileLink>
                    </NavigationMenu.Item>
                  </S.ListMobile>
                </div>
              </S.DialogContent>
            </Dialog.Portal>
          </Dialog.Root>
        </S.mobileNavigationMenuList>

        <S.NavigationMenuList>
          <NavigationMenu.Item>
            <S.NavigationMenuLink href="/">Menu</S.NavigationMenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <S.NavigationMenuLink href="/">Menu</S.NavigationMenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <S.NavigationMenuLink href="/">Menu</S.NavigationMenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <S.NavigationMenuLink href="/">Menu</S.NavigationMenuLink>
          </NavigationMenu.Item>
          <S.NavigationMenuIndicator>
            <S.Arrow />
          </S.NavigationMenuIndicator>
        </S.NavigationMenuList>

        <S.ViewportPosition>
          <S.NavigationMenuViewport />
        </S.ViewportPosition>
      </S.NavContainer>
    </S.NavigationMenuRoot>
  );
};

export default Menu;

const ListItemMobile = forwardRef<HTMLAnchorElement, S.ListItemProps>(
  ({ title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <S.MobileLink {...props} ref={forwardedRef}>
          <S.MobileHeading>{title}</S.MobileHeading>
        </S.MobileLink>
      </NavigationMenu.Link>
    </li>
  )
);
ListItemMobile.displayName = 'ListItemMobile';

const ListItem = forwardRef<HTMLAnchorElement, S.ListItemProps>(
  ({ children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <S.ListItemLink {...props} ref={forwardedRef}>
          <S.ListItemHeading>{title}</S.ListItemHeading>
          <S.ListItemText>{children}</S.ListItemText>
        </S.ListItemLink>
      </NavigationMenu.Link>
    </li>
  )
);
ListItem.displayName = 'ListItem';
