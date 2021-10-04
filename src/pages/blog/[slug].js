import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
        <hr style={{width:'75rem',opacity:'0.1'}} />
      <div className="post">
        <div className="post-date">Posted on {date}</div>
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const blogPostsPath = ["public", "blogPosts"];
  const files = fs.readdirSync(path.join(...blogPostsPath));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const blogPostsPath = ["public", "blogPosts"];
  const markdownWithMeta = fs.readFileSync(
    path.join(...blogPostsPath, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
