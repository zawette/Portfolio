import Link from "next/link";
import React from "react";
import { FiTerminal, FiGithub, FiLinkedin, FiMusic } from "react-icons/fi";
import {
  Container,
  NavLink,
  SocialIcons,
  SocialIconsContainer,
} from "./HeaderStyles";

function Header() {
  return (
    <>
      <Link passHref href="/">
        <NavLink>
          <FiTerminal size="3rem" /> <span>Zawette</span>{" "}
        </NavLink>
      </Link>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com/zawette">
          <FiGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/zouhair-mestour/">
          <FiLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://open.spotify.com/artist/4HolNaHpQyQ4uvMhjIXZcT">
          <FiMusic size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        Blog Posts
      </div>
      <Container>
        <hr style={{width:'50%',opacity:'0.1'}} />
      </Container>
    </>
  );
}

export default Header;
