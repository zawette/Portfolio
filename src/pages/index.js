import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";
import fs from "fs";
import path from "path";

const Home = ({ blogPostsCount }) => {
  return (
    <>
      <Head>
        <title>FullStack WebDev - Software Enginneer</title>
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments blogPostsCount={blogPostsCount} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const blogPostsPath = ["public", "blogPosts"];
  const files = fs.readdirSync(path.join(...blogPostsPath));
  const blogPostsCount = files.filter(file => file.endsWith('.md')).length;

  return {
    props: {
      blogPostsCount,
    },
  };
}

export default Home;
