import styled from 'styled-components';
import HeroSection from '@components/Hero';
import ProjectsSection from '@components/Projects';

const Footer = styled.div`
  padding: 3rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
  opacity: 0.6;
`;
const FooterText = styled.p`
  text-align: center;
`;

const Index = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <Footer>
        <FooterText>Made with Nextjs and hosted on Netlify.</FooterText>
      </Footer>
    </>
  );
};

export default Index;
