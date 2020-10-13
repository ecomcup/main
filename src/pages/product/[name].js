import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layouts/index";
import Products from "@components/Products";

export const query = graphql`
  query ProductPageQuery($name: String) {
    site {
      siteMetadata {
        siteName
      }
    }
    product: allDatoCmsProduct(filter: { name: { eq: $name } }) {
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
`;

export default (props) => {
  console.log(props);
  return (
    <Layout site={props.site}>
      <Products />
    </Layout>
  );
};
