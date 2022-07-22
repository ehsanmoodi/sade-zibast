import { GetStaticProps, GetStaticPaths, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { site: "test" } }, { params: { site: "test2" } }];

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = [
    { domain: "test", data: "My first test project" },
    { domain: "test2", data: "My second test project" },
  ];

  const project = data.find((p) => p.domain === context?.params?.site);

  return {
    props: { project },
  };
};

const Index: NextPage<any> = ({ project }) => {
  return <h1>{project.data}</h1>;
};

export default Index;
