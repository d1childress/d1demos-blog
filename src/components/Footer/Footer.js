import React from 'react';
import { FaGithub, FaCodepen, FaTwitter  } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>e-mail</LinkTitle>
          <LinkItem href="mailto:d1demos@protonmail.com">
            d1demos@protonmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>mastering web.3 development</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://codepen.io/d1demos">
            <FaCodepen size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.github.com/d1childress">
            <FaGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/d1demos">
            <FaTwitter size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
