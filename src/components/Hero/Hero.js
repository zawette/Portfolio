import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Mestour  <br />
          Zouhair
        </SectionTitle>
        <SectionText>
          Software Engineer experienced in .net and javascript development living in Rabat, Morocco
        </SectionText>
        <Button onClick={props.handleClick}>Resume / CV</Button>
      </LeftSection>
    </Section>
  </>

);

export default Hero;