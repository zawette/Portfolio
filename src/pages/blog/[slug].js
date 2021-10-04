import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter style={materialOceanic} language={language}>{value}</SyntaxHighlighter>;
};

export default function PostPage({ frontmatter: { date }, slug, content }) {
  return (
    <>
      <Link href="/blog">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <hr style={{ width: "75rem", opacity: "0.1" }} />
      <div className="post">
        <div className="post-date">Posted on {date}</div>
        <div className="post-body">
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{ code: CodeBlock }}
          />
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
