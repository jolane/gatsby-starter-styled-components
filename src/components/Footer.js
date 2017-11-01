import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import * as vars from "../util/vars"

const Container = styled.footer`
  width: 100%;
  height: ${vars.footerHeight};
  background-color: red;
  color: white;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Footer = props => <Container>Stuff</Container>

export default Footer
