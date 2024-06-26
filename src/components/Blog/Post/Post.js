import Link from "next/link";
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
  return (
    <PostContainer key={key}>
      <PostHeader>
        <PostDate>{post.frontmatter.date}</PostDate>
        {post.frontmatter.tags.map((tag, index) => (
          <PostTags key={index}>{tag}</PostTags>
        ))}
      </PostHeader>
      <PostTitle>
        <Link href={`/blog/${post.slug}`}>
          <a>{post.frontmatter.title}</a>
        </Link>
      </PostTitle>
      <PostExcerpt>{post.frontmatter.excerpt}</PostExcerpt>
    </PostContainer>
  );
}

export default Post;
