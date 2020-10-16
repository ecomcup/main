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
                <List.Item>
                  <Link to="/contact-us">Contact Us</Link>
                </List.Item>
                <List.Item>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Misc." />
              <List link inverted>
                <List.Item>
                  <Link to="/credit-links">Credit Links</Link>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  ); 
}