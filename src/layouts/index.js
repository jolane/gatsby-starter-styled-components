import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { injectGlobal } from "styled-components"
import styledNormalize from "styled-normalize"

import Header from "../components/Header"
import Footer from "../components/Footer"
import * as vars from "../util/vars"

injectGlobal`
  ${styledNormalize}
  html {
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
`

const Main = styled.main`
  padding-top: ${vars.headerHeight};
  min-height: calc(100vh - ${vars.footerHeight});
`

class TemplateWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      nav_open: false
    }
  }
  toggleNav() {
    let nav_open = !this.state.nav_open
    this.setState({ nav_open })
  }
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[{ name: "description", content: "Sample" }]}
        />
        <Header
          toggleNav={this.toggleNav.bind(this)}
          nav_open={this.state.nav_open}
          siteTitle={this.props.data.site.siteMetadata.title}
        />
        <Main>
          {this.props.children({
            ...this.props,
            toggleNav: this.toggleNav.bind(this)
          })}
        </Main>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
