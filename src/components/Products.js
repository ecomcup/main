import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  Button,
  Container,
  Segment,
  Card,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

export default function Products() {
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
        }
      `}
      render={(data) => (
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
      )}
    />
  );

}