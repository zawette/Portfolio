import styled from "styled-components";

export const PostContainer = styled.div`
background-color: ${(props)=>props.theme.colors.background2};
padding : 2rem;
margin-top:2rem;
`;

export const PostTitle = styled.div`
color:${(props)=>props.theme.colors.primary1};
font-size: 2em;
`

export const PostHeader = styled.div`

`

export const PostTags = styled.span`
margin-right: 1rem;
font-size: 0.7em;
`
export const PostDate = styled.span`
margin-right: 1rem;
font-size: 0.7em;
`

export const PostExcerpt = styled.div`
font-size: 1em;
`