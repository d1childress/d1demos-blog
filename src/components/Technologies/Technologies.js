import React from 'react';
import { FaFileSignature, FaSave, FaSdCard } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>tech i use</SectionTitle>
    <SectionText>
      i have experience with a range of technologies in the web development world,
      from front-end to back-end and UI UX design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaSdCard size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>front-end</ListTitle>
          <ListParagraph>
            experiece with <br />
            CSS & HTML <br />
            JavaScript  <br />
            React <br />
            Next.js <br />
            <br />
            Solidity <br />
            tailwind CSS <br />
            TypeScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaSave size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>back-end</ListTitle>
          <ListParagraph>
            also <br />
            Node.js <br />
            CLI <br />
            MySQL 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaFileSignature size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX design</ListTitle>
          <ListParagraph>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
