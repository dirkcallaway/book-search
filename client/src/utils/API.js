import axios from "axios";

export default {
  // Gets all books
  getFavorites: function() {
    // return axios.get("/api/books");
    return axios.get("/api/books")
  },
  // Deletes the book with the given id
  removeFavorite: function(id) {
    return axios.delete("/api/books/" + id);
  },
  addFavorite: function(book) {
    console.log("API Hit!")
    return axios.post("/api/books/add", book)
  }

};