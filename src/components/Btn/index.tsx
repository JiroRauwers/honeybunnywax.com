import { PropsWithChildren } from 'react';

import * as S from './styles';

type Props = PropsWithChildren;

const Buttom = ({ children }: Props) => {
  return <S.Buttom>{children}</S.Buttom>;
};

export default Buttom;
