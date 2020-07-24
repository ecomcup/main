import React from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import { Link } from 'gatsby'

export default function Footer () {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item>Sitemap</List.Item>
                <List.Item>
                  <Link to="/contact-us">Contact Us</Link>
                </List.Item>
                <List.Item>
                  <Link to="/shipping">Shipping</Link>
                </List.Item>
                <List.Item>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item>Banana Pre-Order</List.Item>
                <List.Item>DNA FAQ</List.Item>
                <List.Item>How To Access</List.Item>
                <List.Item>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  ); 
}