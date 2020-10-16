import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Grid, Image, Container } from "semantic-ui-react";
import Layout from "../layouts/index";

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
          <Container style={{ padding: "5em 0" }}>
            <Grid columns={2} divided stackable>
              <Grid.Row>
                <Grid.Column computer={5}>
                  <Image src="/images/shipping.webp" size="medium" circular centered />
                </Grid.Column>
                <Grid.Column>
                  <Container text style={{ paddingLeft: "1em" }}>
                    <h1>Shipping</h1>
                    <h3>Shipping cost</h3>
                    <p>Free shipping for order above MYR50</p>
                    <p>Flat shipping at MYR4 for or order below MYR50</p>

                    <h3>Delivery Time</h3>
                    <p>3-5 working days for West Malaysia</p>
                    <p>4-6 working days for East Malaysia</p>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Layout>
      )}
    />
  );
};
