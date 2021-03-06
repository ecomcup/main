import React from "react";
import Img from "gatsby-image";
import {
  Button,
  Card,
} from "semantic-ui-react";

export default function Product({ product }) {
  return (
    <Card key={product.id}>
      <Img fluid={product.image.sizes} />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        {product.originalPrice && (
          <Card.Description
            style={{ textDecoration: "line-through", color: "lightgrey" }}
          >
            MYR {product.originalPrice}
          </Card.Description>
        )}
        <Card.Description>MYR {product.price}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {product.shopeeUrl && (
          <a href={product.shopeeUrl} target="_blank" rel="noreferrer">
            <Button id="buy-shopee" negative style={{ backgroundColor: "#fe5722" }}>
              Buy at Shopee
            </Button>
          </a>
        )}
        {product.lazadaUrl && (
          <a href={product.lazadaUrl} target="_blank" rel="noreferrer">
            <Button id="buy-lazada">
              Buy at Lazada
            </Button>
          </a>
        )}
        {/* <div className="ui two buttons">
          <Button
            basic
            color="green"
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-image={product.image.url}
            data-item-name={product.name}
            data-item-custom1-name="Frame color"
            data-item-custom1-options="Black|Brown|Gold"
            data-item-custom2-name="Gift note"
            data-item-url={`/`}
          >
            Add To Cart
          </Button>
        </div> */}
      </Card.Content>
    </Card>
  );

}