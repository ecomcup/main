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
                  <Embed
                    id="nCU7eYkAFrg"
                    source="youtube"
                    placeholder="images/nCU7eYkAFrg.jpg"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h3>How to insert & remove a cup?</h3>
                  <Embed id="llM8eGG_NUI" source="youtube" placeholder="images/llM8eGG_NUI.jpg" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h3>Will cup leak?</h3>
                  <Embed id="96HVb7fpbcg" source="youtube" placeholder="images/96HVb7fpbcg.jpg" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Embed id="7eB8VXexBdM" source="youtube" placeholder="images/7eB8VXexBdM.jpg" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Embed id="mJOA8MezH1A" source="youtube" placeholder="images/mJOA8MezH1A.jpg" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Embed id="kcjf-JGd_9Q" source="youtube" placeholder="images/kcjf-JGd_9Q.jpg" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Layout>
      )}
    />
  );
};
