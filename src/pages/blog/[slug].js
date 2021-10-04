import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
  GlobalPostCss,
  PostPreviousBtn,
  StyledHeader1,
  StyledHeader2,
  StyledHeader3,
  StyledParagraph,
} from "../../components/Blog/Post/PostStyles";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={materialOceanic} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const HeadingRenderer = (props)=>{
  switch(props.level){
    case 1:
      return <StyledHeader1>{props.children}</StyledHeader1>;
    case 2:
      return <StyledHeader2>{props.children}</StyledHeader2>;
    case 3:
      return <StyledHeader3>{props.children}</StyledHeader3>;
    default: 
      return <StyledHeader3>{props.children}</StyledHeader3>;
  }
}

export default function PostPage({ frontmatter: { date }, slug, content }) {
  return (
    <>
      <div css={GlobalPostCss}>
        <Link passHref href="/blog">
          <PostPreviousBtn>Go Back</PostPreviousBtn>
        </Link>
        <hr style={{ width: "50%", opacity: "0.1", margin: "2rem 0" }} />
        <div className="post">
          <div className="post-date">Posted on {date}</div>
          <div className="post-body">
            <ReactMarkdown
              escapeHtml={false}
              source={content}
              renderers={{ code: CodeBlock, paragraph:StyledParagraph,heading:HeadingRenderer }}
            />
          </div>
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
