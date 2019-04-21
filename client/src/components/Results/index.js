import React from "react";
import "rbx/index.css";
import { Container, Button, Tile, Title, Notification, Image, Column} from "rbx";
import "./style.css"

function Results (props) {
  return (
    <Container>
      <Tile kind="ancestor">
        <Tile size={12} kind="parent">
          <Tile as={Notification} kind="child" color="primary">
            <Title>{props.title}</Title>
            <Title subtitle>{props.author}</Title>
            <Column.Group>
            <Column size="2">
            <Image.Container size={128} >
              <Image src={props.thumbnail} />
            </Image.Container>
            </Column>
            <Column size="10">
            <p>
              {props.synopsis}
            </p>
            </Column>
            </Column.Group>
            <Button.Group align="right">
            <Button outlined color="white" className="d-inline-block" onClick={props.handleFavoriteClick}>
              Favorite
            </Button>
            <Button as="a" outlined color="white" className="d-inline-block" href={props.link} target="_blank">
              View
            </Button>
            </Button.Group>
          </Tile>
        </Tile>
      </Tile>
    </Container>
  )
}

export default Results