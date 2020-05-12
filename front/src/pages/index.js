import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My Portfolio</h1>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        alignItems: "space-between",
        padding: 0,
        margin: 0,
      }}
    >
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li
          key={project.slug.current}
          style={{
            flex: "1 45%",
            maxWidth: "45%",
            margin: "1rem",
          }}
        >
          <Link to={project.slug.current}>
            <h2>{project.title}</h2>
          </Link>
          <Image fluid={project.image.asset.fluid} alt={project.title} />
          <p style={{ marginTop: "1rem" }}>{project.description}</p>
          <Link to={project.slug.current}>See project details &rarr;</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
