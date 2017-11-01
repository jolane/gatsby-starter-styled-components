import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { media } from "../util/vars"

const Container = styled.nav`
  width: auto;
  transition: all 0.2s;
  ${media.tablet`
  	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 1001;
	background-color: white;
	opacity: ${props => (props.nav_open ? `1` : `0`)};
	visibility: ${props => (props.nav_open ? `visbile` : `hidden`)};
	`};
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  ${media.tablet`
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  `};
`
const Item = styled.li`
  list-style-type: none;
  margin: 0;
  font-size: 1.6rem;
  margin: 0 1em 0 0;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &.is-active {
    text-decoration: underline;
  }
`

const Nav = ({ nav_open }) => (
  <Container nav_open={nav_open}>
    <List>
      <Item>
        <NavLink activeClassName="is-active" to="/page-2">
          Page 2
        </NavLink>
      </Item>
      <Item>
        <NavLink activeClassName="is-active" to="/page-3">
          Page 3
        </NavLink>
      </Item>
    </List>
  </Container>
)

export default Nav
