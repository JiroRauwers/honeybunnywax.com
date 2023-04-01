import { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';

import { darken } from 'polished';
import styled, { css } from 'styled-components';

import Container from 'components/Container';

import { WithSWR } from 'utils';

import { ONE_DAY_IN_SECONDS, ONE_MINUTE_IN_SECONDS } from 'constants/times';

import H1, { H2, H3 } from 'styles/ui/Headers';

import BasePage from 'templates/BasePage';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    'Cache-Control',
    `public, s-maxage=${ONE_DAY_IN_SECONDS}, stale-while-revalidate=${
      20 * ONE_MINUTE_IN_SECONDS
    }`
  );

  return {
    props: {
      fallback: {
        sample: ['']
      }
    }
  };
};

const Home: NextPage = () => {
  return (
    <BasePage>
      <Container $bg="indianRed">
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/hero-crop.jpg'}
          alt="background logo"
          cover
        />
        <Hero>
          <HeroTitle>Honey Bunny</HeroTitle>
          <HeroSub>Authentic Brazilian Wax</HeroSub>
        </Hero>
      </Container>

      <Container>
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/happy-women-at-wedding.jpeg'}
          alt="background logo"
          fill
        />
        <SectionArea>
          <SectionTitle>
            Experience Expert Waxing Services at Our Salon
          </SectionTitle>
          <SectionSubTitle>
            Our Professional Team Will Help You Achieve Silky Smooth Skin and
            Unmatched Confidence.
          </SectionSubTitle>
          <br />
          <Text>
            We believe that waxing is more than just a beauty treatment -
            it&apos;s an experience that empowers people to feel confident and
            beautiful in their own skin. At our Wax Saloon, our team of experts
            is dedicated to providing top-notch waxing services that will leave
            you feeling pampered and rejuvenated. From eyebrows to full body
            waxing, we use only the best techniques and products to ensure that
            you achieve silky smooth skin every time. Come experience the
            difference at our salon and see why we&apos;re the go-to destination
            for people who demand the best in waxing.
          </Text>
        </SectionArea>
      </Container>

      <Container $bg="indianRed">
        <Container.Image
          style={{ filter: 'brightness(1)' }}
          src={'/img/silky.jpg'}
          alt="background logo"
          cover
        />
        <SectionArea>
          <SectionTitle dark>Our services</SectionTitle>
          <SectionItemArea>
            <SectionItem>
              <Image
                src="/icons/full-body.png"
                alt="full body waxing icon"
                width="64"
                height="64"
              />
              <br />
              <ItemText dark>Full body</ItemText>
            </SectionItem>

            <SectionItem>
              <Image
                src="/icons/bikini.png"
                alt="full body waxing icon"
                width="64"
                height="64"
              />
              <br />
              <ItemText dark>Bikini</ItemText>
            </SectionItem>

            <SectionItem>
              <Image
                src="/icons/legs.png"
                alt="full body waxing icon"
                width="64"
                height="64"
              />
              <br />
              <ItemText dark>Legs</ItemText>
            </SectionItem>

            <SectionItem>
              <Image
                src="/icons/back.png"
                alt="full body waxing icon"
                width="64"
                height="64"
              />
              <br />
              <ItemText dark>Back</ItemText>
            </SectionItem>

            <SectionItem>
              <Image
                src="/icons/facial.png"
                alt="full body waxing icon"
                width="64"
                height="64"
              />
              <br />
              <ItemText dark>Facial</ItemText>
            </SectionItem>
          </SectionItemArea>
        </SectionArea>
      </Container>

      <Container>
        <Container.Image
          style={{ filter: 'brightness(0.5)' }}
          src={'/img/brazilian.jpg'}
          alt="background logo"
          fill
        />
        <SectionArea rtl>
          <SectionTitle>
            Brazilian Waxing - Our Specialty for the Smoothest skin ever
          </SectionTitle>
          <br />
          <Text>
            At our Wax Saloon, Brazilian waxing is our specialty. Our expert
            technicians are trained to provide the smoothest, most comfortable
            experience possible. We use only the highest quality wax and
            techniques to ensure that our clients receive the best results every
            time. With our attention to detail and dedication to providing a
            comfortable experience, you can trust us to deliver exceptional
            Brazilian waxing services. Come experience our specialty for
            yourself and see why our clients keep coming back for more.
          </Text>
        </SectionArea>
      </Container>

      <Container>
        <Container.Image
          style={{ filter: 'brightness(0.2)' }}
          src={'/img/professionalism.jpg'}
          alt="background logo"
          cover
        />
        <SectionArea>
          <div style={{ padding: '4rem' }}>
            <SectionTitle>Our Commitment to Every Client</SectionTitle>
            <br />
            <Text>
              At our Wax Saloon, we believe that every customer deserves to be
              treated with the utmost respect and professionalism. Our skilled
              technicians are trained to provide a comfortable and efficient
              waxing experience, while also taking the time to listen to your
              needs and concerns. Whether you&apos;re a first-time client or a
              regular, we strive to make sure that everyone feels welcome and
              special when they visit us. <br /> <br /> We also understand that
              every client is unique and has their own preferences when it comes
              to waxing. That&apos;s why we offer a wide range of services and
              customizable options to suit your individual needs. We pride
              ourselves on providing a judgment-free zone where everyone is
              treated equally and with the same level of care and attention.
              <br /> <br /> At our salon, we&apos;re not just in the business of
              waxing - we&apos;re in the business of making you feel confident
              and beautiful in your own skin. So come visit us and experience
              the professionalism and personalized attention that our salon is
              known for.
            </Text>
          </div>
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
          <SectionTitle>Visit Us</SectionTitle>
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

const ImageWrapper = styled('div')`
  position: relative;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

const FlexWrapper = styled('div')`
  display: flex;
`;

const SectionArea = styled('div')<{ rtl?: boolean }>`
  ${({ theme, rtl }) => css`
    text-align: center;
    padding: 3rem;
    min-height: 60vh;
    text-align: ${rtl && 'right'};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

const SectionItemArea = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 60vh;

    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    @media only screen and (min-width: ${theme.screen.xlPhone}) {
      flex-direction: row;
      min-height: 20vh;
    }
  `}
`;

const Text = styled(H3)<{ dark?: boolean; bold?: boolean }>`
  ${({ theme, dark, bold }) => css`
    padding: 0;
    color: ${dark ? darken(0.6, theme.colors.greyBlue) : theme.colors.greyBlue};
    font-weight: ${bold && theme.font.bold};
  `}
`;

const ItemText = styled('h3')<{ dark?: boolean }>`
  ${({ theme, dark }) => css`
    text-transform: uppercase;
    padding: 0;
    font-size: 1.5rem;
    font-weight: ${theme.font.bold};
    color: ${dark ? darken(0.6, theme.colors.greyBlue) : theme.colors.greyBlue};
  `}
`;

const SectionItem = styled('div')`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-direction: column;

    color: ${theme.colors.greyBlue};

    align-items: center;
    svg {
      height: 70px;
      scale: 4;
    }
  `}
`;

const SectionTitle = styled(H2)<{ dark?: boolean }>`
  ${({ theme, dark }) => css`
    text-align: center;
    text-transform: capitalize;
    font-size: 3rem;
    padding: 0;
    font-weight: ${theme.font.bold};
    color: ${dark ? darken(0.6, theme.colors.greyBlue) : theme.colors.greyBlue};
  `}
`;

const SectionSubTitle = styled(H3)<{ dark?: boolean }>`
  ${({ theme, dark }) => css`
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    padding: 0;
    font-weight: ${theme.font.bold};
    color: ${dark ? darken(0.6, theme.colors.greyBlue) : theme.colors.greyBlue};
  `}
`;

const Hero = styled('div')`
  height: 100vh;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeroTitle = styled(H1)`
  ${({ theme }) => css`
    font-size: 10rem;
    padding: 0;
    font-weight: ${theme.font.bolder};
    color: ${theme.colors.greyBlue};
  `}
`;

const HeroSub = styled(H2)`
  ${({ theme }) => css`
    font-size: 5rem;
    padding: 0;
    font-weight: ${theme.font.light};
    color: ${theme.colors.greyBlue};
  `}
`;

export default WithSWR(Home);
