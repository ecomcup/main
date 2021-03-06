import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { navigate } from '@reach/router'
import {
  Container,
  Icon,
  Image,
  Menu,
  Responsive,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { isMobileOnly } from "react-device-detect";
import Footer from '@components/Footer';
import { navigations } from "../constants";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => navigate(name);

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            fixed={fixed ? "top" : null}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" name="/" onClick={this.handleItemClick}>
                <Image src="/images/logo.png" size="small" />
              </Menu.Item>
              <Menu.Item as="a" name="/products" onClick={this.handleItemClick}>
                Products
              </Menu.Item>
              {/* <Menu.Item
                position="right"
                inverted="true"
                className="snipcart-summary snipcart-checkout"
              >
                <Icon name="shopping cart" />
                <span className="snipcart-total-items"></span>
              </Menu.Item> */}
            </Container>
          </Menu>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });
  handleItemClick = (e, { name }) => navigate(name);

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" name="/" onClick={this.handleItemClick} active>
            <Image src="/images/logo.png" size="tiny" />
          </Menu.Item>
          <Menu.Item as="a" name="/products" onClick={this.handleItemClick}>
            Products
          </Menu.Item>
          <Menu.Item name="guide">
            <Menu.Header>Guides</Menu.Header>

            <Menu.Menu>
              {navigations.map((nav) => (
                <Menu.Item
                  key={nav.link}
                  as="a"
                  name={nav.link}
                  onClick={this.handleItemClick}
                >
                  {nav.header}
                </Menu.Item>
              ))}
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item as="a" name="/contact-us" onClick={this.handleItemClick}>
            Contact Us
          </Menu.Item>

          {/* <Menu.Item
            position="right"
            className="snipcart-summary snipcart-checkout"
          >
            <Icon name="shopping cart" />
            My Shopping Cart
            <span className="snipcart-total-items"></span>
          </Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Container>
            <Menu pointing secondary size="small">
              <Menu.Item>
                <Icon name="sidebar" onClick={this.handleToggle} />
              </Menu.Item>
              <Menu.Item name="/" onClick={this.handleItemClick}>
                <Image src="/images/logo.png" size="tiny" />
              </Menu.Item>
              {/* <Menu.Item
                position="right"
                className="snipcart-summary snipcart-checkout"
              >
                <Icon name="shopping cart" />

                <span className="snipcart-total-items"></span>
              </Menu.Item> */}
            </Menu>
          </Container>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children, ...props }) => {
  if (isMobileOnly) {
    return <MobileContainer {...props}>{children}</MobileContainer>;
  }

  return <DesktopContainer {...props}>{children}</DesktopContainer>;
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ children, ...props }) => (
  <ResponsiveContainer {...props}>
    {children}

    <Footer />
  </ResponsiveContainer>
)

export default HomepageLayout
