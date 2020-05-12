import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/layout";

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      description
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const { title, description, image } = data.sanityProject;
  return (
    <Layout>
      <Image fluid={image.asset.fluid} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/">Back to home</Link>
    </Layout>
  );
};
