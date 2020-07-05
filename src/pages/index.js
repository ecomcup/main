import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Card,
} from 'semantic-ui-react'

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
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
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <Layout site={data.site}>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Help Companies and Companions
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible.
                  Let us delight your customers and empower your needs... through pure data analytics.
            </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Make Bananas That Can Dance
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                  bioengineered.
            </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "What a Company"
            </Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "I shouldn't have gone with their competitor."
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Breaking The Grid, Grabs Your Attention
        </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the
              art of doing nothing by providing massive amounts of whitespace and generic content that
              can seem massive, monolithic and worth your attention.
        </p>
            <Button as='a' size='large'>
              Read More
        </Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              Case Studies
        </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>
              Did We Tell You About Our Bananas?
        </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
              it's really true. It took years of gene splicing and combinatory DNA research, but our
              bananas can really dance.
        </p>
            <Button as='a' size='large'>
              I'm Still Quite Interested
        </Button>
          </Container>
        </Segment>


        <Card.Group>
          {
            data.products.edges.map(({ node: product }) => (

              <Card
                key={product.id}
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                  <Img sizes={product.image.sizes} />
                <Card.Content>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    {product.price}€
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      Buy now
                    </Button>
                  </div>
                </Card.Content>
              </Card>
              // <div className="Catalogue__item" key={product.id}>
              //   <div
              //     className="Product snipcart-add-item"
              //     data-item-id={p > roduct.id}
              //     data-item-price={product.price}
              //     data-item-image={product.image.url}
              //     data-item-name={product.name}
              //     data-item-url={`/`}
              //   >
              //     <div className="Product__image">
              //       <Img sizes={product.image.sizes} />
              //     </div> <div className="Product__details">
              //       <div className="Product__name">
              //         {product.name}
              //         <div className="Product__price">
              //           {product.price}€
              //     </div>
              //       </div>
              //       <span className="Product__buy">Buy now</span>
              //     </div>
              //   </div>
              // </div>
            ))
          }
        </Card.Group>
      </Layout>
    )}
  />
)
