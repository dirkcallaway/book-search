import React from "react";
import "rbx/index.css";
import { Hero, Title, Container } from "rbx";

function PageNotFound () {
  return (
    <Hero color="warning">
        <Hero.Body>
          <Container>
            <Title>You Found Page 404!</Title>
            <Title as="h2" subtitle>
              But we can't...
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
  )
}

export default PageNotFound