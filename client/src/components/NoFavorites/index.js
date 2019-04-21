import React from "react";
import "rbx/index.css";
import { Container, Tile, Title, Notification} from "rbx";
import "./style.css"

function NoResults (props) {
  return (
    <Container>
      <Tile kind="ancestor">
        <Tile size={12} kind="parent">
          <Tile as={Notification} kind="child" color="primary">
            <Title>Add a book to your favorites to see it here.</Title>
          </Tile>
        </Tile>
      </Tile>
    </Container>
  )
}

export default NoResults