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

const Home = ({ blogPostsCount, githubProjects, npmPackages }) => {
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
        <Acomplishments blogPostsCount={blogPostsCount} githubProjects={githubProjects} npmPackages={npmPackages} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Fetch blog posts count
  const blogPostsPath = ["public", "blogPosts"];
  const files = fs.readdirSync(path.join(...blogPostsPath));
  const blogPostsCount = files.filter(file => file.endsWith('.md')).length;

// Fetch github projects count
  const githubResponse = await fetch('https://api.github.com/users/zawette/repos?per_page=100');
  const githubData = await githubResponse.json();
  const githubProjects = githubData.length;

  // Fetch npm packages count
  const npmResponse = await fetch('https://api.npms.io/v2/search?q=maintainer:zawette');
  const npmData = await npmResponse.json();
  const npmPackages = npmData.total;


  return {
    props: {
      blogPostsCount,
      githubProjects,
      npmPackages
    },
  };
}

export default Home;
