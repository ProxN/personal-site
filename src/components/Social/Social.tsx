import styled from 'styled-components';
import MailIcon from '@assets/mail.svg';
import LinkedinIcon from '@assets/linkedin.svg';
import GithubICon from '@assets/github.svg';
import TwitterIcon from '@assets/twitter.svg';

const SocialContainer = styled.div`
  position: relative;
  padding: 3rem 0;
  display: flex;
  align-items: center;
`;

const IconLink = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  padding: 1rem;
  cursor: pointer;
  align-items: center;
  transition: all 200ms ease-in-out;
  opacity: 0.6;
  margin-right: 1.5rem;
  :hover {
    opacity: 1;
    border-radius: 50%;
    border-color: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.secondary.main};
  }
  svg {
    fill: currentColor;
    height: 20px;
    width: 20px;
  }
`;

const SocialLinks = [
  {
    key: 'mail',
    icon: <MailIcon />,
    link: 'mailto:kanoundev@gmail.com',
  },
  {
    key: 'linkedin',
    icon: <LinkedinIcon />,
    link: 'https://www.linkedin.com/in/ayoubidelkanoun/',
  },
  {
    key: 'github',
    icon: <GithubICon />,
    link: 'http://github.com/proxN',
  },
  {
    key: 'twitter',
    icon: <TwitterIcon />,
    link: 'https://twitter.com/ProxNN_',
  },
];

const Soical = () => {
  return (
    <SocialContainer>
      {SocialLinks.map((el) => (
        <IconLink rel='noopener' target='_blank' href={el.link} key={el.key}>
          {el.icon}
        </IconLink>
      ))}
    </SocialContainer>
  );
};

export default Soical;
