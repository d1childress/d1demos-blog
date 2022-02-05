import Link from 'next/link';
import React from 'react';
import { FaCodepen, FaGithub, FaLinkedIn, FaTwitter } from 'react-icons/fa';
import { FcCommandLine } from 'react-icons/fc';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <FcCommandLine size="3rem" /><span></span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>tech</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>about</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://codepen.com/d1demos">
          <FaCodepen size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.github.com/d1childress">
          <FaGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.twitter.com/d1demos">
          <FaTwitter size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
