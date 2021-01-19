import Flex from '@components/Flex';
import OpenIcon from '@assets/open.svg';
import GithubIcon from '@assets/github.svg';
import {
  Heading,
  ButtonLink,
  ProjectDescription,
  ProjectTitle,
  ProjectBox,
  Links,
  ProjectsList,
  Tech,
} from './Projects.styles';

const data = [
  {
    title: 'Fortnite Stats',
    description:
      'Fortnite tracker to look up for player stats and view the current item shop.',
    tech: ['javascript', 'sass'],
    links: [
      {
        type: 'demo',
        url: 'https://fortstats.netlify.app/',
      },
      {
        type: 'code',
        url: 'https://github.com/ProxN/FortniteTracker',
      },
    ],
  },
  {
    title: 'Todohub',
    description:
      'A simple time management app that helps you track your monthly goals and daily tasks.',
    tech: ['reactjs', 'typescript'],
    links: [
      {
        type: 'demo',
        url: 'https://todohub1.netlify.app/',
      },
      {
        type: 'code',
        url: 'https://github.com/ProxN/Todohub',
      },
    ],
  },
  {
    title: 'Reddit Timer',
    description:
      'Reddit timer is a website for content creators to look for the best times to post to Reddit.',
    tech: ['reactjs', 'styled-components'],
    links: [
      {
        type: 'demo',
        url: 'https://reddit-timer.netlify.app/',
      },
      {
        type: 'code',
        url: 'https://github.com/ooloo-io/reddit-timer-ProxN',
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id='projects'>
      <Heading>Projects</Heading>
      <ProjectsList>
        {data.map((el) => (
          <ProjectBox key={el.title}>
            <ProjectTitle>{el.title}</ProjectTitle>
            <ProjectDescription>{el.description}</ProjectDescription>
            <Flex marginTop={1.5}>
              {el.tech.map((t) => (
                <Tech key={t}>{t}</Tech>
              ))}
            </Flex>
            <Links>
              {el.links.map((link) => (
                <ButtonLink
                  key={link.type}
                  href={link.url}
                  rel='noopener'
                  target='_blank'
                >
                  {link.type}
                  {link.type === 'demo' ? <OpenIcon /> : <GithubIcon />}
                </ButtonLink>
              ))}
            </Links>
          </ProjectBox>
        ))}
      </ProjectsList>
    </section>
  );
};

export default Projects;
