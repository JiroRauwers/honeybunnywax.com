import { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';

import { IconJarLogoIcon } from '@radix-ui/react-icons';
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
    `public, s-maxage=${ONE_DAY_IN_SECONDS}, stale-while-revalidate=${20 * ONE_MINUTE_IN_SECONDS
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
      <Container $bg='indianRed'>
        <Container.Image style={{ filter: 'brightness(0.5)' }} src={'/img/body-wax.jpg'} alt="background logo" fill />
        <Hero>
          <HeroTitle>
            Honey Bunny
          </HeroTitle>
          <HeroSub>
            Authentic Brazilian Wax
          </HeroSub>
        </Hero>
      </Container>

      <Container $bg='indianRed'>
        <SectionArea >
          <SectionTItle dark >Welcome to our Brazilian wax salon</SectionTItle>
          the premier destination for all your waxing needs!
        </SectionArea>
      </Container>

      <Container>
        <Container.Image style={{ filter: 'brightness(0.5)' }} src={'/img/body-wax.jpg'} alt="background logo" fill />
        <SectionArea>
          <SectionTItle>professional Brazilian waxing</SectionTItle>
          <SectionItemArea>
            <SectionItem>
              <IconJarLogoIcon />
              <ItemText>
                Safe
              </ItemText>
            </SectionItem>

            <SectionItem>
              <IconJarLogoIcon />
              <ItemText>
                higienic
              </ItemText>
            </SectionItem>

            <SectionItem>
              <IconJarLogoIcon />
              <ItemText>
                affordable
              </ItemText>
            </SectionItem>

          </SectionItemArea>
        </SectionArea>
      </Container>

      <Container>
        <FlexWrapper>

          <ImageWrapper>
            <Image src={'/img/Vinyl.png'} alt='gloved hand' fill />
          </ImageWrapper>
          <SectionArea rtl>
            <SectionTItle dark>We specialize in Brazilian waxing</SectionTItle>
            which is a popular and effective method for removing unwanted hair in the intimate area. Our estheticians are trained to perform this service quickly and efficiently, while also ensuring that you are fully satisfied with the results.
          </SectionArea>
        </FlexWrapper>
      </Container>


      <Container>
        <Container.Image style={{ filter: 'brightness(0.5)' }} src={'/img/body-wax.jpg'} alt="background logo" fill />
        <SectionArea >
          <div style={{ padding: '4rem' }}>
            <Text >
              we offer a variety of other waxing services, including eyebrow shaping, leg waxing, and underarm waxing. Our goal is to help you feel confident and beautiful from head to toe.
            </Text>
          </div>
        </SectionArea>
      </Container>

      <Container >
        <Container.Image src={'/img/moisturizing.jpg'} alt="background logo" fill />
        <FlexWrapper>
          <ImageWrapper>
          </ImageWrapper>
          <SectionArea rtl>
            <div style={{ padding: '4rem', paddingRight: 0 }}>
              <Text dark bold>
                we offer a variety of other waxing services, including eyebrow shaping, leg waxing, and underarm waxing. Our goal is to help you feel confident and beautiful from head to toe.
              </Text>
            </div>
          </SectionArea>
        </FlexWrapper>
      </Container>

      <Container>
        <Container.Image style={{ filter: 'brightness(0.5)' }} src={'/img/body-wax.jpg'} alt="background logo" fill />
        <SectionArea>
          <SectionTItle>Visit Us</SectionTItle>
          <SectionItemArea>
            <SectionItem>
              <ItemText>
                Business hours
              </ItemText>
              <Text>
                Tuesday 10am - 7pm
              </Text>
              <Text>
                Wednesday 10am - 7pm
              </Text>
              <Text>
                Thursday 10am - 7pm
              </Text>
              <Text>
                Friday 10am - 7pm
              </Text>
              <Text>
                Saturday 10am - 4pm
              </Text>

            </SectionItem>

            <SectionItem>
              <ItemText>
                Contact Info
              </ItemText>
              <Text>
                NorthShore
                423-314-0403
              </Text>
              <Text>
                Hamilton
                423-305-8380
              </Text>
              <Text>
                Hixson
                423-314-9150
              </Text>
              <Text>
                Signal Mtn
                423-314-2787
              </Text>
              <Text>
                Cleveland
                423-800-5616
              </Text>
              <Text>
                Dalton GA
                706 -383-2312
              </Text>



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

const SectionArea = styled('div') <{ rtl?: boolean }>`
  ${({ theme, rtl }) => css`
    padding: 3rem;
    min-height: 45vh;
    text-align :  ${rtl && 'right'};
    display: flex;
    flex-direction: column;    justify-content: center;
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

const Text = styled(H3) <{ dark?: boolean, bold?: boolean }>`
 ${({ theme, dark, bold }) => css`
    padding: 0;
    color: ${dark ? darken(.6, theme.colors.greyBlue) : theme.colors.greyBlue};
    font-weight: ${bold && theme.font.bold};
  `}
`;

const ItemText = styled(H3)`
 ${({ theme }) => css`
    text-transform: uppercase;
    padding: 0;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.greyBlue};
  `}
`;

const SectionItem = styled('div')`
  ${({ theme }) => css`
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

const SectionTItle = styled(H2) <{ dark?: boolean }>`
  ${({ theme, dark }) => css`
    text-transform: capitalize;
    padding: 0;
    font-weight: ${theme.font.bold};
    color: ${dark ? darken(.6, theme.colors.greyBlue) : theme.colors.greyBlue};
  `}
`;

const Hero = styled('div')`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
const HeroTitle = styled(H1)`
  ${({ theme }) => css`
  padding: 0;
    font-weight: ${theme.font.bolder};
    color: ${theme.colors.greyBlue}
  `}
`;

const HeroSub = styled(H2)`
${({ theme }) => css`
    padding: 0;
    font-weight: ${theme.font.light};
    color: ${theme.colors.greyBlue}
  `}
`;




export default WithSWR(Home);
