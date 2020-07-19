import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Container,
  Segment,
  Card,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import Product from "@components/Product";

export default function Products() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <StaticQuery
      query={graphql`
        query CatalogueQuery {
          products: allDatoCmsProduct {
            edges {
              node {
                id
                name
                price
                originalPrice
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
      render={(data) => (
        <Segment vertical>
          <Container>
            <h1>All products</h1>
            <Card.Group itemsPerRow={isMobile ? 1 : 6}>
              {data.products.edges.map(({ node: product }) => (
                <Product product={product} />
              ))}
            </Card.Group>
          </Container>
        </Segment>
      )}
    />
  );

}