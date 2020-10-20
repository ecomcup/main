import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import {
  Container,
  Card,
  Divider,
  Header,
  Segment,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import Product from "@components/Product";

export default function MainProducts() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <StaticQuery
      query={graphql`
        query MainProductsQuery {
          products: allDatoCmsProduct(
            limit: 6
            filter: {
              collections: { elemMatch: { label: { in: ["Home Page"] } } }
            }
          ) {
            edges {
              node {
                id
                name
                price
                originalPrice
                shopeeUrl
                lazadaUrl
                image {
                  url
                  sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                    ...GatsbyDatoCmsSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        if (!data.products.edges.length) return null;
        
        return (
          <Segment vertical style={{ padding: "4em 0em" }}>
            <Container>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Best Seller
              </Header>
              <Card.Group
                itemsPerRow={isMobile ? 1 : data.products.edges.length}
              >
                {data.products.edges.map(({ node: product }) => (
                  <Product product={product} key={product.id} />
                ))}
              </Card.Group>
              <Divider
                horizontal
                as="h4"
                className="header"
                style={{ marginTop: "3em", textTransform: "uppercase" }}
              >
                <Link to="/products">More</Link>
              </Divider>
            </Container>
          </Segment>
        );
      }}
    />
  );

}