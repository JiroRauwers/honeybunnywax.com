import { FC, PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import Menu from 'components/Menu/index';

type Props = PropsWithChildren;

const Template: FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Template;
