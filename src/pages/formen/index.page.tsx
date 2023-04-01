import { NextPage } from 'next';

import { darken } from 'polished';
import styled, { css } from 'styled-components';

import Container from 'components/Container';





import H1, { H2, H3 } from 'styles/ui/Headers';

import { QuoteIcon } from '@radix-ui/react-icons';
import BasePage from 'templates/BasePage';


const ForMen: NextPage = () => {
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

      

      <Container>
        <Container.Image style={{ filter: 'brightness(0.5)' }} src={'/img/men1.webp'} alt="background logo" fill />
        <SectionArea >
          <div style={{ padding: '5rem',  paddingBottom: '1rem' }}>
            <Text >
            The benefits of Brazilian waxing for men are numerous. Firstly, it provides a clean and fresh feeling that lasts for weeks, eliminating the need for constant shaving or trimming. This can be particularly beneficial for athletes or men who sweat a lot, as it can reduce body odor and chafing.
            </Text>
          </div>
          <div style={{ padding: '5rem', paddingTop: '1rem' }}>
            <Text >
            Moreover, Brazilian waxing can boost your confidence and self-esteem. A hairless intimate area can make you feel more attractive and masculine, and give you the courage to wear revealing clothes or swimwear.

            </Text>
          </div>
        </SectionArea>
      </Container>

      <Container >
        <Container.Image src={'/img/men2.jpg'} alt="background logo" fill />
        <FlexWrapper>
          <div style={{width: '30vw', flexGrow:1}}  >
          <SectionArea rtl>
            </SectionArea>
          </div>
          <div style={{width: '60vw'}}  >

          <SectionArea rtl>
            <div style={{ padding: '4rem', paddingRight: 0 }}>
              <Text dark bold>
                <QuoteIcon  scale={2}/>
              I was a bit nervous about getting a Brazilian wax for the first time, but the team at this wax company made me feel so comfortable and at ease. They explained the entire process and answered all my questions. The wax itself was quick and virtually painless, and the results were amazing. I'm so happy I tried it and will definitely be coming back.
                <QuoteIcon />
              </Text>
            </div>
          </SectionArea>
            </div>
        </FlexWrapper>
      </Container>


      <Container $bg='dark'>
        <SectionArea >
          <Text>
          Whether you're looking to enhance your appearance, improve your hygiene, or simply try something new, Brazilian waxing for men is a great option. Book your appointment today and experience the benefits for yourself!
          </Text>
        </SectionArea>
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
  flex-direction: row;
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




export default ForMen;
