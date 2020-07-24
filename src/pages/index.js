import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import {
  Card,
  Grid,
  Header,
  Segment,
  Icon,
} from "semantic-ui-react";
import Layout from "../layouts/index";
import MainProducts from "@components/MainProducts";
import BrandHeader from "@components/BrandHeader";

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
          <BrandHeader />

          <Segment style={{ padding: "4em 0em" }} vertical>
            <Grid container stackable columns={4}>
              <Grid.Column>
                <Header as="h1" icon>
                  <Icon name="settings" />
                  Easy to use
                  <Header.Subheader>
                    Manage your account settings and set e-mail preferences.
                  </Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" icon>
                  <Icon name="settings" />
                  No chemicals, BPA or latex
                  <Header.Subheader>
                    Manage your account settings and set e-mail preferences.
                  </Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" icon>
                  <Icon name="settings" />
                  Made of medical grade silicone
                  <Header.Subheader>
                    Manage your account settings and set e-mail preferences.
                  </Header.Subheader>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" icon>
                  <Icon name="settings" />
                  Use up to 12 hours & empty 2-4 times/day
                  <Header.Subheader>
                    Manage your account settings and set e-mail preferences.
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>

          <Segment vertical>
            <Grid container stackable relaxed centered columns={3}>
              <Grid.Column>
                <Link to="/cup-brand">
                  <Card
                    fluid
                    header="About the brand"
                    extra="Learn More"
                    style={{
                      color: "white",
                      height: "200px",
                      backgroundSize: "cover",
                      backgroundImage: "url(/images/about-the-brand.webp)",
                    }}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link to="/cup-info">
                  <Card
                    fluid
                    header="Cup info"
                    extra="Learn More"
                    style={{
                      color: "white",
                      height: "200px",
                      backgroundSize: "cover",
                      backgroundImage: "url(/images/cup-info.webp)",
                    }}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link to="/cup-guide">
                  <Card
                    fluid
                    header="User guide"
                    extra="Learn More"
                    style={{
                      color: "white",
                      height: "200px",
                      backgroundSize: "cover",
                      backgroundImage: "url(/images/user-guide.webp)",
                    }}
                  />
                </Link>
              </Grid.Column>
            </Grid>
          </Segment>

          <MainProducts />
        </Layout>
      )}
    />
  );
};
