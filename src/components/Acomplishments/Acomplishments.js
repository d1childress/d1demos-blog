import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'programming languages learned' },
  { number: 1000, text: 'views on codepen', },
  { number: 2, text: 'years of experience', },
  { number: 14, text: '14-week bootcamp completed', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>recent milestones</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
