import React from "react";
import { FiGithub, FiLinkedin,FiMusic } from "react-icons/fi";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+212658244837">(+212) 658-244-837</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mestourzouhair@gmail.com">
            mestourzouhair@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>-</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/zawette">
        <FiGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zouhair-mestour/">
        <FiLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://soundcloud.com/zawette">
        <FiMusic size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
