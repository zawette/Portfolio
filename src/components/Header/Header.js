import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiMusic } from "react-icons/fi";
import { FiTerminal } from "react-icons/fi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  NavLink2,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link passHref href="/">
        <NavLink2>
          <FiTerminal size="3rem" /> <span>Zawette</span>
        </NavLink2>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link passHref href="/Blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/zawette">
        <FiGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zouhair-mestour/">
        <FiLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://soundcloud.com/zawette">
        <FiMusic size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
