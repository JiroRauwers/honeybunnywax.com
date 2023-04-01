import { NextPage } from 'next';

import { QuoteIcon } from '@radix-ui/react-icons';

import Container from 'components/Container';

import BasePage from 'templates/BasePage';

import {
  FlexWrapper,
  Hero,
  HeroSub,
  HeroTitle,
  ItemText,
  SectionArea,
  SectionItem,
  SectionItemArea,
  SectionTItle,
  Text
} from './styles';

const ForMen: NextPage = () => {
  return (
    <BasePage>
      <Container $bg="indianRed">
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/body-wax.jpg'}
          alt="background logo"
          fill
        />
        <Hero>
          <HeroTitle>Honey Bunny</HeroTitle>
          <HeroSub>Authentic Brazilian Wax</HeroSub>
        </Hero>
      </Container>

      <Container>
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/men1.webp'}
          alt="background logo"
          fill
        />
        <SectionArea>
          <div style={{ padding: '5rem', paddingBottom: '1rem' }}>
            <Text>
              The benefits of Brazilian waxing for men are numerous. Firstly, it
              provides a clean and fresh feeling that lasts for weeks,
              eliminating the need for constant shaving or trimming. This can be
              particularly beneficial for athletes or men who sweat a lot, as it
              can reduce body odor and chafing.
            </Text>
          </div>
          <div style={{ padding: '5rem', paddingTop: '1rem' }}>
            <Text>
              Moreover, Brazilian waxing can boost your confidence and
              self-esteem. A hairless intimate area can make you feel more
              attractive and masculine, and give you the courage to wear
              revealing clothes or swimwear.
            </Text>
          </div>
        </SectionArea>
      </Container>

      <Container>
        <Container.Image src={'/img/men2.jpg'} alt="background logo" fill />
        <FlexWrapper>
          <div style={{ width: '30vw', flexGrow: 1 }}>
            <SectionArea rtl></SectionArea>
          </div>
          <div style={{ width: '60vw' }}>
            <SectionArea rtl>
              <div style={{ padding: '4rem', paddingRight: 0 }}>
                <Text dark bold>
                  <QuoteIcon scale={2} />
                  I was a bit nervous about getting a Brazilian wax for the
                  first time, but the team at this wax company made me feel so
                  comfortable and at ease. They explained the entire process and
                  answered all my questions. The wax itself was quick and
                  virtually painless, and the results were amazing. I&apos;m so
                  happy I tried it and will definitely be coming back.
                  <QuoteIcon />
                </Text>
              </div>
            </SectionArea>
          </div>
        </FlexWrapper>
      </Container>

      <Container $bg="dark">
        <SectionArea>
          <Text>
            Whether you&apos;re looking to enhance your appearance, improve your
            hygiene, or simply try something new, Brazilian waxing for men is a
            great option. Book your appointment today and experience the
            benefits for yourself!
          </Text>
        </SectionArea>
      </Container>

      <Container>
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/body-wax.jpg'}
          alt="background logo"
          fill
        />
        <SectionArea>
          <SectionTItle>Visit Us</SectionTItle>
          <SectionItemArea>
            <SectionItem>
              <ItemText>Business hours</ItemText>
              <Text>Tuesday 10am - 7pm</Text>
              <Text>Wednesday 10am - 7pm</Text>
              <Text>Thursday 10am - 7pm</Text>
              <Text>Friday 10am - 7pm</Text>
              <Text>Saturday 10am - 4pm</Text>
            </SectionItem>

            <SectionItem>
              <ItemText>Contact Info</ItemText>
              <Text>NorthShore 423-314-0403</Text>
              <Text>Hamilton 423-305-8380</Text>
              <Text>Hixson 423-314-9150</Text>
              <Text>Signal Mtn 423-314-2787</Text>
              <Text>Cleveland 423-800-5616</Text>
              <Text>Dalton GA 706 -383-2312</Text>
            </SectionItem>
          </SectionItemArea>
        </SectionArea>
      </Container>
    </BasePage>
  );
};
export default ForMen;
