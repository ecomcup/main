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
          others: allDatoCmsProduct(
            filter: {
              collections: {
                elemMatch: {
                  label: {
                    nin: ["Starter Kit", "Menstrual Cups", "Cleansing Products"]
                  }
                }
              }
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

          starterKits: allDatoCmsProduct(
            filter: {
              collections: { elemMatch: { label: { in: ["Starter Kit"] } } }
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

          menstrualCups: allDatoCmsProduct(
            filter: {
              collections: { elemMatch: { label: { in: ["Menstrual Cups"] } } }
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

          cleansingProducts: allDatoCmsProduct(
            filter: {
              collections: {
                elemMatch: { label: { in: ["Cleansing Products"] } }
              }
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
      render={(data) => {
        return (
          <Segment vertical>
            <Container>
              <h1>All products</h1>

              <h3>Starter Kits</h3>
              <Card.Group itemsPerRow={isMobile ? 1 : 6}>
                {data.starterKits.edges.map(({ node: product }) => (
                  <Product product={product} key={product.id} />
                ))}
              </Card.Group>

              <h3>Menstrual Cups</h3>
              <Card.Group itemsPerRow={isMobile ? 1 : 6}>
                {data.menstrualCups.edges.map(({ node: product }) => (
                  <Product product={product} key={product.id} />
                ))}
              </Card.Group>

              <h3>Cleansing Products</h3>
              <Card.Group itemsPerRow={isMobile ? 1 : 6}>
                {data.cleansingProducts.edges.map(({ node: product }) => (
                  <Product product={product} key={product.id} />
                ))}
              </Card.Group>

              {!!data.others.edges.length && <>
                <h3>Others</h3>
                <Card.Group itemsPerRow={isMobile ? 1 : 6}>
                  {data.others.edges.map(({ node: product }) => (
                    <Product product={product} key={product.id} />
                  ))}
                </Card.Group>
              </>}
            </Container>
          </Segment>
        );
      }}
    />
  );

}