import React, { Component } from 'react';
import Header from "../components/Header"
import Results from "../components/Results"
import NoResults from "../components/NoResults"
import "rbx/index.css";
import { Field, Label, Control, Input, Button, Container, Section } from "rbx";
const API_KEY = process.env.REACT_APP_BookKey;
const axios = require('axios');

class Books extends Component {

  state = {
    title: "",
    results: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFavoriteClick (id) {
    const savedBook = this.state.results.find(book => book.id === id)
    axios.post('/api/add', {data: savedBook});
  }

  GetBooks = event => {
    event.preventDefault();
    let query = this.state.title.split(" ").join("+");
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&`+ API_KEY)
  .then(response => this.setState({ title: "", results: response.data.items }))
  .catch(function (error) {
    console.log(error);
  });
  }
  
  render() {
  return (
    <div>
      <Header />
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
                <Button color="success" onClick={this.GetBooks}>Search</Button>
              </Control>
            </Field>
          </form>
        </Container>
      </Section>
      {this.state.results.length ? 
        <div>
          {this.state.results.map(book => {
            return (
              <Results 
                key = {book.id}
                thumbnail = {book.volumeInfo.imageLinks.thumbnail}
                title = {book.volumeInfo.title}
                synopsis = {book.volumeInfo.description}
                author = {book.volumeInfo.authors}
                link = {book.volumeInfo.previewLink}
                handleFavoriteClick = {() => this.handleFavoriteClick(book.id)}
              />
            );
          })}
        </div>
        : 
        <NoResults />
      }
    </div>
  )
}
}

export default Books