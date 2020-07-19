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
            <Grid container stackable relaxed columns={3}>
              <Grid.Column>
                <Card
                  header="About the brand"
                  extra={<Link to="/cup-brand">Learn More</Link>}
                  style={{
                    height: "350px",
                    backgroundImage: "url(https://via.placeholder.com/300x350)",
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Card
                  header="Cup info"
                  extra={<Link to="/cup-info">Learn More</Link>}
                  style={{
                    height: "350px",
                    backgroundImage: "url(https://via.placeholder.com/300x350)",
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Card
                  header="User guide"
                  extra={<Link to="/cup-guide">Learn More</Link>}
                  style={{
                    height: "350px",
                    backgroundImage: "url(https://via.placeholder.com/300x350)",
                  }}
                />
              </Grid.Column>
            </Grid>
          </Segment>

          <MainProducts />
        </Layout>
      )}
    />
  );
};
