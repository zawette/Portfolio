import React from "react";
import fs from "fs";
import Head from "next/head";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Blog/Post/post";
import { Layout } from "../layout/Blog/Layout";
import { Container } from "../layout/Blog/LayoutStyles";

function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>FullStack WebDev - Software Enginneer</title>
      </Head>
      <Layout>
        <Container>
          <div>
            {posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const blogPostsPath = ["public", "blogPosts"];
  const files = fs.readdirSync(path.join(...blogPostsPath));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join(...blogPostsPath, filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      ),
    },
  };
}

export default Blog;
