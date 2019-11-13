import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { defaultDescription } from 'data/config';

//TODO write content
export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt={defaultDescription} />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          Welcome to my little corner of the internet. I'm a passionate fullstack web developer with a decade of real world experience programming.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
