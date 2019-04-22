import React, { Component } from 'react';
import Header from "../components/Header";
import Favorites from "../components/Favorites";
import NoFavorites from "../components/NoFavorites"
import NavBar from "../components/NavBar"
import API from "../utils/API"

class FavoriteBooks extends Component {
  state = {
    books: []
  }

  handleRemoveFavoriteClick = (id) => {
    API.removeFavorite(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getFavorites()
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        {this.state.books.length ? 
        <div>
          {this.state.books.map(book => {
            return (
              <Favorites 
                key = {book.bookID}
                thumbnail = {book.thumbnail}
                title = {book.title}
                synopsis = {book.synopsis}
                author = {book.author}
                link = {book.link}
                handleFavoriteClick = {() => this.handleRemoveFavoriteClick(book.bookID)}
              />
            );
          })}
        </div>
        : 
        <NoFavorites />
      }
      </div>
    )
  }
}

export default FavoriteBooks