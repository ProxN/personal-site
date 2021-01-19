import styled from 'styled-components';
import { Media } from '@styles/index';
import Header from './Header';

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  min-height: 100vh;

  ${Media.desktop} {
    padding: 0 3rem;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Main>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Main>
  );
};

export default Layout;
