import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import * as vars from "../util/vars"

import Hamburger from "../components/Hamburger"
import Nav from "../components/Nav"

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${vars.headerHeight};
  background-color: green;
  color: white;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = props => (
  <Container>
    <h1>
      <Link to="/">{props.siteTitle}</Link>
    </h1>
    <Nav {...props} />
    <Hamburger {...props} />
  </Container>
)

export default Header
