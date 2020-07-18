import React from "react";
import Img from "gatsby-image";
import {
  Button,
  Card,
} from "semantic-ui-react";

export default function Product({ product }) {
  return (
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
        <Card.Description>MYR {product.price}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" className="Product__buy">
            Buy now
          </Button>
        </div>
      </Card.Content>
    </Card>
  );

}