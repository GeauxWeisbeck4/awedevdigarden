import { GetStaticProps } from "next";
import styles from "./index.module.css";

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About({ name }: AboutProps) {
  return (
    <div>
      <h1>Welcome, {name}</h1>
    </div>
  );
}

/*
- getStaticProps
- getStaticPaths
*/

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: "Andrew",
    },
  };
};

export default About;
