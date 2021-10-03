import React from "react";
import {
  PostContainer,
  PostTitle,
  PostHeader,
  PostExcerpt,
  PostDate,
  PostTags,
} from "./PostStyles";

function Post({ post, key }) {
  console.log(post);
  return (
    <PostContainer key={key}>
      <PostHeader>
        <PostDate>{post.frontmatter.date}</PostDate>
        {post.frontmatter.tags.map((tag, index) => (
          <PostTags key={index}>{tag}</PostTags>
        ))}
      </PostHeader>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <PostExcerpt>{post.frontmatter.excerpt}</PostExcerpt>
    </PostContainer>
  );
}

export default Post;
