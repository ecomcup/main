import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Header, Image, Divider } from "semantic-ui-react";
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
              About a Menstrual Cup
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Menstrual cup provides you a comfortable, odorless period for up
              to 12 hours a day. Completely reusable & your cup will last
              several years, making it better for the environment.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              Lunette menstrual cup registered with FDA and TGA. Winner of the
              vigorous Danish chemical safety test. Eco-friendly from production
              to 100% biodegrable packaging, made in Finland.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              We’re Lunette offical e-retailer & ready to help you understand
              more about the cup. If you have any question or concern on how to
              use it or it’s safety please feel free to contact us. We’re happy
              to help{" "}
              <span role="img" aria-label="sheep">
                🙂
              </span>
            </p>

            <Header as="h3" style={{ fontSize: "2em" }}>
              How to use
            </Header>
            <Image src="/images/cup-size.webp" />
            <Divider hidden />
            <Image src="/images/cup-model.jpg" />
            <Divider hidden />
            <Image src="/images/instructions.webp" />
          </Container>
        </Layout>
      )}
    />
  );
};
