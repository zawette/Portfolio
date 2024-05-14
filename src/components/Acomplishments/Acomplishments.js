import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = ({ blogPostsCount,githubProjects, npmPackages }) => {


  return (
    <Section>
      <SectionTitle>Achievements</SectionTitle>
      <Boxes>
        <Box>
          <BoxNum>{`${githubProjects}+`}</BoxNum>
          <BoxText>Open Source Projects</BoxText>
        </Box>
        <Box>
          <BoxNum>{`${npmPackages}+`}</BoxNum>
          <BoxText>NPM Packages</BoxText>
        </Box>
        <Box>
          <BoxNum>{`${blogPostsCount}+`}</BoxNum>
          <BoxText>Blog posts</BoxText>
        </Box>
      </Boxes>
      <SectionDivider/>
    </Section>
  );
};

export default Acomplishments;