import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { navigate } from '@reach/router'
import {
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import {
  isBrowser,
} from "react-device-detect";
import HomepageHeading from '@components/HomepageHeading'

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

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 700,
            padding: "1em 0em",
            backgroundImage: `url("/images/homepage-heading.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#C4E5F6",
          }}
          vertical
        >
          <HomepageHeading />
          {children}
        </Segment>
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 250,
            padding: "1em 0em",
            backgroundImage: `url("/images/homepage-heading.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#C4E5F6",
          }}
          vertical
        >
          <HomepageHeading mobile />
          {children}
        </Segment>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const BrandHeader = ({ children, ...props }) => {
  if (isBrowser) {
    return <DesktopContainer {...props}>{children}</DesktopContainer>
  }

  return <MobileContainer {...props}>{children}</MobileContainer>;
};

export default BrandHeader
