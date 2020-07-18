import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Icon,
} from "semantic-ui-react";
import Layout from "../layouts/index";
import Products from "@components/Products";

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
          <Segment style={{ padding: "4em 0em" }} vertical>
            <Grid container relaxed columns={4}>
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

          <Segment style={{ padding: "8em 0em" }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: "2em" }}>
                About a Menstrual Cup
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Menstrual cup provides you a comfortable, odorless period for up
                to 12 hours a day. Completely reusable & your cup will last
                several years, making it better for the environment.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                Lunette menstrual cup registered with FDA and TGA. Winner of the
                vigorous Danish chemical safety test. Eco-friendly from
                production to 100% biodegrable packaging, made in Finland.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                We’re Lunette offical e-retailer & ready to help you understand
                more about the cup. If you have any question or concern on how
                to use it or it’s safety please feel free to contact us. We’re
                happy to help 🙂
              </p>

              <Header as="h3" style={{ fontSize: "2em" }}>
                Why Lunette
              </Header>
              <Button as="a" size="large">
                Read More
              </Button>
            </Container>
          </Segment>

          <Segment vertical>
            <Grid container relaxed columns={3}>
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
            </Grid>
          </Segment>

          <Products />

          <Segment container>
            <Container>
              <Header as="h3" style={{ fontSize: "2em" }}>
                How to use
              </Header>
              <Image
                bordered
                rounded
                size="large"
                src="/images/cup-size.webp"
              />
              <Image
                bordered
                rounded
                size="large"
                src="/images/cup-model.jpg"
              />
              <Image
                bordered
                rounded
                size="large"
                src="/images/instructions.webp"
              />
            </Container>
          </Segment>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            Case Studies
          </Divider>

          <Segment style={{ padding: "0em" }} vertical>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    "What a Company"
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    That is what they all say about us
                  </p>
                </Grid.Column>
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    "I shouldn't have gone with their competitor."
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    <Image avatar src="/images/avatar/large/nan.jpg" />
                    <b>Nan</b> Chief Fun Officer Acme Toys
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Products />
        </Layout>
      )}
    />
  );
};
