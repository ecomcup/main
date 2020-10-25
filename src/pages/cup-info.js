import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import { Container, Grid, Embed } from "semantic-ui-react";

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteName
            }
          }
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "images/video-placeholders" }
            }
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const placeholders = [
          { id: "nCU7eYkAFrg.jpg", title: "How to use a cup?" },
          { id: "llM8eGG_NUI.jpg", title: "How to insert & remove a cup?" },
          { id: "96HVb7fpbcg.jpg", title: "Will cup leak?" },
          { id: "7eB8VXexBdM.jpg" },
          { id: "mJOA8MezH1A.jpg" },
          { id: "kcjf-JGd_9Q.jpg" },
        ];

        return (
          <Layout site={data.site}>
            <Container style={{ padding: "3em 0" }}>
              <h1>More Info</h1>
              <Grid>
                {placeholders.map(({ id, title }) => {
                  const file = data.allFile.edges.find(({ node }) => (node.base === id));
                  return (
                    <Grid.Row key={id}>
                      <Grid.Column>
                        {title && <h3>{title}</h3>}
                        <Embed
                          id={id.replace('.jpg', '')}
                          source="youtube"
                          placeholder={file.node.childImageSharp.fluid.src}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  );
                })}
              </Grid>
            </Container>
          </Layout>
        );
      }}
    />
  );
};
