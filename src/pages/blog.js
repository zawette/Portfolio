import React from "react";
import fs from "fs";
import Head from 'next/head'
import path from "path";
import matter from "gray-matter";
import Post from "../components/Blog/Post/post";
import { Layout } from "../layout/Blog/Layout";

function Blog(props) {
   return (<>
      <Head>
        <title>FullStack WebDev - Software Enginneer</title>
      </Head>
      <Layout>
       <Post></Post> 
      </Layout>
    </>)
}

export async function getStaticProps() {
  const blogPostsPath = ["public", "blogPosts"];
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(...blogPostsPath));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
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
