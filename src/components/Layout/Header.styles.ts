import styled, { css } from 'styled-components';
import { Media } from '@styles/index';

export const HeaderContainer = styled.header`
  height: 10rem;
  width: 100%;
  position: fixed;
`;

export const Nav = styled.nav`
  max-width: 100rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Media.desktop} {
    padding: 0 3rem;
  }
`;

export const Logo = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.main};
    border: 1px solid ${theme.colors.secondary.main};
    ::before {
      background: ${theme.colors.primary.dark};
    }
    ::after {
      background: ${theme.colors.secondary.main};
    }
  `};

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 1px;
    top: -1px;
  }
  ::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: 0;
    border-radius: 50%;
  }

  :hover {
  }
  svg {
    height: 30px;
    width: 30px;
  }
`;

export const Menu = styled.div<{ menuOpen?: boolean }>`
  display: flex;

  ${Media.tablet} {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    background: ${({ theme }) => theme.colors.primary.main};
    width: 40%;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 5rem 3rem;
    z-index: -1;
    border-radius: 8px 34px 8px 8px;
    box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItem = styled.a<{ border?: boolean }>`
  ${({ theme, border }) => css`
    color: ${theme.colors.textColor};
    font-weight: ${theme.fontWeights[1]};
    border: ${border && `2px solid${theme.colors.secondary.main}`};
    :hover {
      color: ${theme.colors.secondary.main};
      opacity: 1;
    }
  `};
  border-radius: 1rem 5rem 5rem;
  position: relative;
  cursor: pointer;
  padding: 0.6rem 1.5rem;
  margin: 0 0.5rem;
  opacity: 0.9;
  transition: all 250ms ease-in-out;

  ${Media.tablet} {
    margin: 0.5rem 0;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondary.main};
`;

export const HamburgerTab = styled.div<{ menuOpen: boolean }>`
  height: 3rem;
  width: 3rem;
  flex-direction: column;
  justify-content: space-evenly;
  display: none;
  cursor: pointer;
  :hover ${Bar} {
    :nth-child(2),
    :nth-child(3) {
      width: 100%;
    }
  }
  ${Bar} {
    transition: all 250ms ease-in-out;
    :nth-child(1) {
      transform: ${({ menuOpen }) => menuOpen && 'rotate(45deg) translate(5px,6px)'};
    }
    :nth-child(2) {
      width: 75%;
      transform: ${({ menuOpen }) => (menuOpen ? 'scale(0)' : 'none')};
    }
    :nth-child(3) {
      width: ${({ menuOpen }) => (menuOpen ? '100%' : '50%')};
      transform: ${({ menuOpen }) => menuOpen && 'rotate(-45deg) translate(5px,-6px)'};
    }
  }

  ${Media.tablet} {
    display: flex;
  }
`;
