import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Grid, Image, Container, List } from "semantic-ui-react";
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
                  <Image src="/images/contact-us.jpg" size="medium" centered />
                </Grid.Column>
                <Grid.Column>
                  <Container text style={{ paddingLeft: "1em" }}>
                    <h1>Contact Us</h1>
                    <p>If you have any special question, let us know.</p>

                    <List size="huge">
                      <List.Item
                        icon="mail"
                        content={
                          <a href="mailto:support@femmico.com">
                            support@femmico.com
                          </a>
                        }
                      />
                    
                      <List.Item
                        icon="whatsapp"
                        content={
                          <a href="https://wa.me/601118576987">+6011-18576987</a>
                        }
                      />
                    
                      <List.Item
                        icon="instagram"
                        content={
                          <a href="https://instagram.com/femmico">femmico</a>
                        }
                      />
                    
                      <List.Item
                        icon="facebook"
                        content={
                          <a href="https://facebook.com/femmico">femmico</a>
                        }
                      />
                    </List>
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
