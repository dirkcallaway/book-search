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
            <Title>Search for a Book to see results!</Title>
          </Tile>
        </Tile>
      </Tile>
    </Container>
  )
}

export default NoResults