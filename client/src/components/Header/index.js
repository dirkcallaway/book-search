import React from "react";
import "rbx/index.css";
import { Hero, Title, Container } from "rbx";

function Header () {
  return (
    <Hero color="link">
        <Hero.Body>
          <Container>
            <Title> Book Search</Title>
            <Title as="h2" subtitle>
              Find books.  Add to favorites.  Read on!
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
  )
}

export default Header