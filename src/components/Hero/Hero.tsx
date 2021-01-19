import styled, { css } from 'styled-components';
import Flex from '@components/Flex';
import Social from '@components/Social';
import { Media } from '@styles/index';

const HeroSection = styled.section`
  height: calc(100vh - 10rem);
`;

const SubHeading = styled.h1<{ underLine?: boolean }>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[4]}px;
    font-weight: ${theme.fontWeights[2]};
  `};
  ${({ underLine, theme }) =>
    underLine &&
    css`
      ::before {
        content: '';
        position: absolute;
        height: 1px;
        background: ${theme.colors.secondary.main};
        bottom: -5px;
        width: 100%;
      }
    `};
  width: fit-content;
  position: relative;
  display: inline-block;
  line-height: 1.25;

  ${Media.thone} {
    font-size: 2.5rem;
  }
  ${Media.phablet} {
    font-size: 2rem;
  }

  ${Media.phone} {
    font-size: 1.6rem;
  }
`;

const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[6]}px;
    font-weight: ${theme.fontWeights[2]};

    span {
      color: ${theme.colors.secondary.main};
    }
  `};

  line-height: 1.25;
  margin: 1rem 0;
  ${Media.thone} {
    font-size: 4.4rem;
  }

  ${Media.phablet} {
    font-size: 3.2rem;
  }
  ${Media.phone} {
    font-size: 2.6rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Flex justify='center' height='100%' direction='column'>
        <SubHeading underLine>Hey there!</SubHeading>
        <Heading>
          I&apos;m
          <span>&nbsp; Ayoub Kanoun</span>
        </Heading>
        <SubHeading as='h2'>I&apos;m a Front-End Deveopler.</SubHeading>
        <Social />
      </Flex>
    </HeroSection>
  );
};

export default Hero;
