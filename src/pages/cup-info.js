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
        }
      `}
      render={(data) => (
        <Layout site={data.site}>
          <Container style={{ padding: "3em 0" }}>
            <h1>More Info</h1>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <h3>How to use a cup?</h3>
                  <Embed id="nCU7eYkAFrg" source="youtube" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h3>How to insert & remove a cup?</h3>
                  <Embed id="llM8eGG_NUI" source="youtube" pl />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h3>Will cup leak?</h3>
                  <Embed id="96HVb7fpbcg" source="youtube" pl />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Layout>
      )}
    />
  );
};
