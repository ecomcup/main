import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Card,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

export default () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <StaticQuery
      query={graphql`
        query CatalogueQuery {
          products: allDatoCmsProduct(limit: 6) {
            edges {
              node {
                id
                name
                price
                image {
                  url
                  sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                    ...GatsbyDatoCmsSizes
                  }
                }
              }
            }
          }
          site {
            siteMetadata {
              siteName
            }
          }
        }
      `}
      render={(data) => (
        <Layout site={data.site}>
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Easy to use
                  </Header>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Eco-friendly product
                  </Header>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Product Made in Finland
                  </Header>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    No chemicals, BPA or latex
                  </Header>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Made of medical grade silicone
                  </Header>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Use up to 12 hours & empty 2-4 times/day
                  </Header>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered
                    rounded
                    size="large"
                    src="/images/instructions.webp"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button size="huge">Check Them Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

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

          <Segment style={{ padding: "8em 0em" }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Breaking The Grid, Grabs Your Attention
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Instead of focusing on content creation and hard work, we have
                learned how to master the art of doing nothing by providing
                massive amounts of whitespace and generic content that can seem
                massive, monolithic and worth your attention.
              </p>
              <Button as="a" size="large">
                Read More
              </Button>

              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                Case Studies
              </Divider>

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
              <Button as="a" size="large">
                I'm Still Quite Interested
              </Button>
            </Container>
          </Segment>

          <Segment vertical>
            <Container>
              <Card.Group itemsPerRow={isMobile ? 1 : 6}>
                {data.products.edges.map(({ node: product }) => (
                  <Card
                    key={product.id}
                    className="Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`/`}
                  >
                    <Img sizes={product.image.sizes} />
                    <Card.Content>
                      <Card.Header>{product.name}</Card.Header>
                      <Card.Description>{product.price}€</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green" className="Product__buy">
                          Buy now
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </Container>
          </Segment>
        </Layout>
      )}
    />
  );
};
