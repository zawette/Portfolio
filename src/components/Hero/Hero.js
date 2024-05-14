import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Typewriter from "typewriter-effect";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Zouhair <br />
          <Typewriter
            options={{
              strings: "Mestour",
              autoStart: true,
              loop: true,
              pauseFor:3500,
              skipAddStyles:true,
            }}
          />
        </SectionTitle>
        <SectionText>
          FullStack WebDev / Software Engineer experienced in .net and javascript development
          living in Île-de-France, France
        </SectionText>
        <Button onClick={props.handleClick}>Resume / CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
