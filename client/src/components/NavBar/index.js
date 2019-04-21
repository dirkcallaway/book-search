import React from "react";
import "rbx/index.css";
import { Navbar, Container } from "rbx";

function NavBar () {
  return (
    <Navbar color="link">
      <Container>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item href="/">
            Home
          </Navbar.Item>
          <Navbar.Item href="/favorites">
            Favorites
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
      </Container>
    </Navbar>
  )
}

export default NavBar