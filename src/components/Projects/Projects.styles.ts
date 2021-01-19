import styled, { css } from 'styled-components';

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[4]}px;
    font-weight: ${theme.fontWeights[2]};
  `};
  position: relative;
  display: inline-block;
  line-height: 1.25;
  padding-bottom: 1rem;

  ::after {
    background: ${({ theme }) => theme.colors.secondary.main};
    content: '';
    position: absolute;
    width: 50%;
    height: 5px;
    left: 0;
    bottom: 0;
  }
`;

export const ProjectsList = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, auto));
  grid-gap: 3rem;
`;

export const ProjectBox = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.main};
    border: 2px solid ${theme.colors.primary.light};
  `};
  padding: 1rem 2rem;
  border-radius: 8px;
`;

export const ProjectTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.main};
    font-size: ${theme.fontSizes[3]}px;
    font-weight: ${theme.fontWeights[1]};
  `};
`;

export const ProjectDescription = styled.p`
  opacity: 0.7;
  margin-top: 1rem;
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonLink = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primary.dark};
    border: 1px solid ${theme.colors.primary.light};
    color: ${theme.colors.textColor};
  `};

  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  opacity: 0.7;
  text-transform: capitalize;
  svg {
    height: 2rem;
    width: 2rem;
    margin-left: 1rem;
    fill: currentColor;
  }

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Tech = styled.span`
  :not(:last-child) {
    margin-right: 1rem;
  }
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  padding: 0.2rem 1rem;
  opacity: 0.7;
  text-transform: capitalize;
  span {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;
