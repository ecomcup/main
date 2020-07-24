import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Container,
  Segment,
  Card,
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
              collections: { elemMatch: { label: { eq: "Main Page" } } }
            }
          ) {
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
            <Card.Group itemsPerRow={isMobile ? 1 : 6}>
              {data.products.edges.map(({ node: product }) => (
                <Product product={product} key={product.id} />
              ))}
            </Card.Group>
          </Container>
        </Segment>
      )}
    />
  );

}