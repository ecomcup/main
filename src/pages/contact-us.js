import React from "react";
import { StaticQuery, graphql } from "gatsby";
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
          <h1>Contact us</h1>
        </Layout>
      )}
    />
  );
};
