import { useCallback, useState } from 'react';
import Link from 'next/link';
import LogoSVG from '@assets/logo.svg';
import {
  HeaderContainer,
  Logo,
  Nav,
  Menu,
  MenuItem,
  Bar,
  HamburgerTab,
} from './Header.styles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Link href='/'>
          <Logo>
            <LogoSVG />
          </Logo>
        </Link>
        <Menu menuOpen={menuOpen}>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem border>Resume</MenuItem>
        </Menu>
        <HamburgerTab onClick={toggleMenu} menuOpen={menuOpen}>
          <Bar className={menuOpen ? 'forward' : 'backward'} />
          <Bar className={menuOpen ? 'forward' : 'backward'} />
          <Bar className={menuOpen ? 'forward' : 'backward'} />
        </HamburgerTab>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
