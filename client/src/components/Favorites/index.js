import React from "react";
import "rbx/index.css";
import { Container, Button, Section, Tile, Title, Notification, Image, Column} from "rbx";
import "./style.css"

function Favorites (props) {
  return (
    <Section>
    <Container>
      <Title>Favorites:</Title>
      <Tile kind="ancestor">
        <Tile size={12} kind="parent">
          <Tile as={Notification} kind="child" color="primary">
            <Title>{props.title}</Title>
            <Title subtitle>Author</Title>
            <Column.Group>
            <Column size="2">
            <Image.Container size={128} >
              <Image src="https://bulma.io/images/placeholders/128x128.png" />
            </Image.Container>
            </Column>
            <Column size="10">
            <p>
              Here is a summary of the book.  It is longer than the title and author. It has information
              about the story.  It doesn't give away too much though.  Just enough.
            </p>
            </Column>
            </Column.Group>
            <Button.Group align="right">
            <Button outlined color="white" className="d-inline-block">
              Favorite
            </Button>
            <Button outlined color="white" className="d-inline-block">
              View
            </Button>
            </Button.Group>
          </Tile>
        </Tile>
      </Tile>
    </Container>
    </Section>
  )
}

export default Favorites