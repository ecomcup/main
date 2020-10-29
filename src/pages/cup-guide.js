import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Header, Image, Divider, Table } from "semantic-ui-react";
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
              How to Use?
            </Header>
            <Image src="/images/instructions.webp" />
            <Divider hidden />
            <Header as="h3" style={{ fontSize: "2em" }}>
              Cup Size & Recommended Cup
            </Header>
            <Image src="/images/cup-size.webp" />
            <Divider hidden />
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Recommended Cup Size</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Young Lady</Table.Cell>
                  <Table.Cell>Model 1</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Woman with Kids (age &lt; 38)</Table.Cell>
                  <Table.Cell>Model 1 or 2</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Woman (age 38+)</Table.Cell>
                  <Table.Cell>Model 1 or 2</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Woman with Kids (age 38+)</Table.Cell>
                  <Table.Cell>Model 2</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
        </Layout>
      )}
    />
  );
};
