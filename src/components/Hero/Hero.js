import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          d1demos <br />
          virtual notebook
        </SectionTitle>
        <SectionText>
          frontend developer
        </SectionText>
        <Button onClick={props.handleClick}>scroll for more</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;