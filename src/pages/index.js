import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import {
  Card,
  Container,
  Grid,
  Header,
  Segment,
  Image,
  Button,
} from "semantic-ui-react";
import Layout from "../layouts/index";
import MainProducts from "@components/MainProducts";
import BrandHeader from "@components/BrandHeader";

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
          allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "images/navigation" }
            }
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          features: allFile(
            filter: {
              extension: { regex: "/(jpg)|(jpeg)|(png)/" }
              relativeDirectory: { eq: "images/features" }
            }
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const navigations = [
          {
            header: "About Lunette & Femmico",
            link: "/cup-brand",
            image: "about-the-brand.jpg",
          },
          { header: "User Guide", link: "/cup-guide", image: "user-guide.jpg" },
          { header: "More Info", link: "/cup-info", image: "cup-info.png" },
        ];
        const features = [
          { header: "Easy to use", image: "easy-to-use.png" },
          { header: "Eco Friendly", image: "eco-friendly.png" },
          { header: "Up to 12 hours", image: "12-hours.png" },
          { header: "Medical Grade Silicone", image: "medical-grade.png" },
          { header: "No chemicals, BPA or Latex", image: "bpa-free.png" },
          { header: "Made in Finland", image: "finland.png" },
        ];
        return (
          <Layout site={data.site}>
            <BrandHeader />

            <Segment vertical style={{ padding: "4em 0em" }}>
              <Container text>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Why Lunette Menstrual Cup?
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Lunette menstrual cup registered with FDA and TGA. Winner of
                  the vigorous Danish chemical safety test. Eco-friendly from
                  production to 100% biodegrable packaging. Product made in
                  Finland.
                </p>
              </Container>
            </Segment>

            <Segment
              style={{ padding: "4em 0em", backgroundColor: "#F9F9F9" }}
              vertical
            >
              <Grid container stackable columns={3}>
                {features.map((feature) => {
                  const file = data.features.edges.find(
                    (image) => image.node.base === feature.image
                  );
                  return (
                    <Grid.Column key={feature.image} textAlign="center">
                      <Image
                        src={file.node.childImageSharp.fluid.src}
                        centered
                      />
                      <Header as="h3">{feature.header}</Header>
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Segment>

            <Segment vertical style={{ padding: "4em 0em" }}>
              <Container text>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  What is Menstrual Cup?
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Made of Silicone or Latex Rubber. The Small, Flexible Cup is a
                  type of Reusable Feminine Hygiene Product. Insert it like
                  tampon. Instead of absorbing period fluid like a tampon or
                  pad, Menstrual Cup collects it. Depending on your flow, a Cup
                  can use up to 12 hours & can hold more blood than other
                  methods. A Eco-friendly product for menstrual period.
                </p>
              </Container>
            </Segment>

            <Segment
              vertical
              style={{ padding: "4em 0em", backgroundColor: "#F9F9F9" }}
            >
              <Grid container stackable relaxed centered columns={3}>
                {navigations.map((navigation) => {
                  const file = data.allFile.edges.find(
                    (image) => image.node.base === navigation.image
                  );
                  return (
                    <Grid.Column key={navigation.link}>
                      <Link to={navigation.link}>
                        <Card
                          fluid
                          header={navigation.header}
                          extra={<Button>Learn More</Button>}
                          style={{
                            color: "white",
                            height: "300px",
                            backgroundSize: "cover",
                            backgroundImage: `url(${file.node.childImageSharp.fluid.src})`,
                          }}
                        />
                      </Link>
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Segment>

            <MainProducts />
          </Layout>
        );
      }}
    />
  );
};
