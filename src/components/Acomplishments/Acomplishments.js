import React, { useState, useEffect } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = ({ blogPostsCount }) => {
  const [githubProjects, setGithubProjects] = useState(0);
  const [npmPackages, setNpmPackages] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/users/zawette/repos?per_page=100')
      .then(response => response.json())
      .then(data => setGithubProjects(data.length))
      .catch(error => console.error('Error fetching GitHub projects:', error));

    fetch('https://api.npms.io/v2/search?q=maintainer:zawette')
      .then(response => response.json())
      .then(data => setNpmPackages(data.total))
      .catch(error => console.error('Error fetching NPM packages:', error));
  }, []);

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