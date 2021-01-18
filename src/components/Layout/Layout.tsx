import styled from 'styled-components';
import Header from './Header';

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  );
};

export default Layout;
