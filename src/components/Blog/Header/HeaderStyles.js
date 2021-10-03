import styled from "styled-components";

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

`

export const SocialIconsContainer = styled(Container)` 
  column-gap:4rem;
`

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;