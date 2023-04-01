import Image from 'next/image';
import Link from 'next/link';

import Container from 'components/Container';

import * as S from './styles';

const Footer = () => {
  return (
    <>
      <Container $sm>
        <S.Wrapper>
          <S.col>

            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
          </S.col>
          <S.col>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
          </S.col>
          <S.col>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
            <Link href={'/'}>example</Link>
          </S.col>
        </S.Wrapper>
      </Container>
      <Container $bg="indianRed">
        <S.BottomWrapper>
          <S.BottomFooterText>Copright text ...</S.BottomFooterText>
          <S.BottomFooterText>
            Desenvolvido por ...
            <Image src={'/.svg'} alt="Icone central" width={31} height={31} />
          </S.BottomFooterText>
        </S.BottomWrapper>
      </Container>
    </>
  );
};

export default Footer;
