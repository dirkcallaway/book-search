import React, { Component } from 'react';
import Header from "../components/Header"
import Results from "../components/Results"
import NoResults from "../components/NoResults"
import NavBar from "../components/NavBar"
import API from "../utils/API"
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

  handleSave = (id) => {
    const savedBook = this.state.results.find(book => book.id === id)
    API.addFavorite({
      title: savedBook.volumeInfo.title,
      author: savedBook.volumeInfo.authors[0],
      synopsis: savedBook.volumeInfo.description,
      link: savedBook.volumeInfo.previewLink,
      thumbnail: savedBook.volumeInfo.imageLinks.thumbnail,
      bookID: savedBook.id
    })
    .then(console.log("saved to DB"))
    .catch(err => console.log(err));
}

  // handleFavoriteClick (id) {
  //   const savedBook = this.state.results.find(book => book.id === id)
  //   API.addFavorite(savedBook);
  // }

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
      <NavBar />
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
                handleFavoriteClick = {() => this.handleSave(book.id)}
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