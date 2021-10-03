import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background2};
  padding: 2rem;
  margin-top: 2rem;
`;

export const PostTitle = styled.div`
  font-weight: 500;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2em;
  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  }
`;

export const PostHeader = styled.div``;

export const PostTags = styled.a`
  text-decoration: underline;
  margin-right: 1rem;
  font-size: 0.7em;
  &:hover {
    cursor: pointer;
  }
`;
export const PostDate = styled.span`
  margin-right: 1rem;
  font-size: 0.7em;
`;

export const PostExcerpt = styled.div`
  font-size: 1em;
  overflow:hidden;
  line-height: 2rem;
  max-height: 8rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;
