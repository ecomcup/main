import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Container,
  Header,
  Image,
  Divider,
} from "semantic-ui-react";
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
          <Container text style={{ padding: "3em 0" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              How to use
            </Header>
            <Image src="/images/cup-size.webp" />
            <Divider hidden />
            <Image src="/images/cup-model.jpg" />
            <Divider hidden />
            <Image
              src="/images/instructions.webp"
            />
          </Container>
        </Layout>
      )}
    />
  );
};
