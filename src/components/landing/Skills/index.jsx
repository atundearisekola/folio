import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Arisekola and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
          I am an experienced Full-Stack developer and social media manager, 
          I’ve been a professional developer for more than 4 years.
I’ve mostly worked professionally with Java, PHP, Javascript, Node.js and Python, I am proficient in the use of  Frameworks including 
(React.js, React Native, Next.js, Gatsby, Laravel), I have well understanding of tools like Docker, Kubernetics and micro-service architecture.

          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
