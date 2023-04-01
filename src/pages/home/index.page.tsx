import { NextPage } from 'next';
import Image from 'next/image';

import { IconJarLogoIcon } from '@radix-ui/react-icons';

import Container from 'components/Container';

import BasePage from 'templates/BasePage';

import {
  FlexWrapper,
  Hero,
  HeroSub,
  HeroTitle,
  ImageWrapper,
  ItemText,
  SectionArea,
  SectionItem,
  SectionItemArea,
  SectionTItle,
  Text
} from './styles';

const Home: NextPage = () => {
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

      <Container $bg="indianRed">
        <SectionArea>
          <SectionTItle dark>Welcome to our Brazilian wax salon</SectionTItle>
          the premier destination for all your waxing needs!
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
          <SectionTItle>professional Brazilian waxing</SectionTItle>
          <SectionItemArea>
            <SectionItem>
              <IconJarLogoIcon />
              <ItemText>Safe</ItemText>
            </SectionItem>

            <SectionItem>
              <IconJarLogoIcon />
              <ItemText>higienic</ItemText>
            </SectionItem>

            <SectionItem>
              <IconJarLogoIcon />
              <ItemText>affordable</ItemText>
            </SectionItem>
          </SectionItemArea>
        </SectionArea>
      </Container>

      <Container>
        <FlexWrapper>
          <ImageWrapper>
            <Image src={'/img/Vinyl.png'} alt="gloved hand" fill />
          </ImageWrapper>
          <SectionArea rtl>
            <SectionTItle dark>We specialize in Brazilian waxing</SectionTItle>
            which is a popular and effective method for removing unwanted hair
            in the intimate area. Our estheticians are trained to perform this
            service quickly and efficiently, while also ensuring that you are
            fully satisfied with the results.
          </SectionArea>
        </FlexWrapper>
      </Container>

      <Container>
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/body-wax.jpg'}
          alt="background logo"
          fill
        />
        <SectionArea>
          <div style={{ padding: '4rem' }}>
            <Text>
              we offer a variety of other waxing services, including eyebrow
              shaping, leg waxing, and underarm waxing. Our goal is to help you
              feel confident and beautiful from head to toe.
            </Text>
          </div>
        </SectionArea>
      </Container>

      <Container>
        <Container.Image
          src={'/img/moisturizing.jpg'}
          alt="background logo"
          fill
        />
        <FlexWrapper>
          <ImageWrapper></ImageWrapper>
          <SectionArea rtl>
            <div style={{ padding: '4rem', paddingRight: 0 }}>
              <Text dark bold>
                we offer a variety of other waxing services, including eyebrow
                shaping, leg waxing, and underarm waxing. Our goal is to help
                you feel confident and beautiful from head to toe.
              </Text>
            </div>
          </SectionArea>
        </FlexWrapper>
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

export default Home;
