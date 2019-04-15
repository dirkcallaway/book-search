import React from "react";
import "rbx/index.css";
import { Field, Label, Control, Input, Button, Container, Section } from "rbx";

function SearchForm (props) {
  console.log(props.GetBooks)
  return (
    <Section>
    <Container>
      <form>
        <Field>
          <Label>What book are you looking for?</Label>
          <Control>
            <Input type="text"
             placeholder="Book Title"
             value={this.state.title}
             onChange={this.handleInputChange}
             name="title"
             />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button color="success" onClick={() => props.GetBooks()}>Search</Button>
          </Control>
        </Field>
      </form>
    </Container>
    </Section>
  )
}

export default SearchForm