import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Footer from '@components/Footer'
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
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url("/images/homepage-heading.jpg")`,
              backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
              backgroundPosition: 'center right', backgroundColor: '#C4E5F6'
          }}

            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Femmico
                </Menu.Item>
                {/* <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item> */}
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
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
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Femmico
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ children }) => (
  <ResponsiveContainer>
    {children}

    <Footer />
  </ResponsiveContainer>
)

export default HomepageLayout

// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import Link from 'gatsby-link'

// import '../style/index.scss'

// const Layout = ({ children, site }) => (
//   <div>
//     <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
//     <div className="Container">
//       <div className="Header">
//         <div className="Wrap" >
//           <div className="Header__body">
//             <h1 className="Header__title">
//               <Link data-text={site.siteMetadata.siteName} to="/">
//                 {site.siteMetadata.siteName}
//               </Link>
//             </h1>
//             <div className="Header__summary snipcart-summary snipcart-checkout">
//               <div className="Header__summary__title">
//                 🛍 MY CART 🛍
//               </div>
//               <div className="Header__summary__line">
//                 Number of items: <span className="snipcart-total-items"></span>
//               </div>
//               <div className="Header__summary__line">
//                 Total price: <span className="snipcart-total-price"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Wrap" >
//         {children}
//       </div>
//       <div className="Wrap" >
//         <div className="Footer">
//           This website is just an example project to demonstrate how you can 
//           integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://snipcart.com/">Snipcart</a> and <a href="https://www.datocms.com">DatoCMS</a>.
//         </div>
//       </div>
//     </div>
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

// export default Layout

