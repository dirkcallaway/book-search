import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "rbx/index.css";
import {  } from "rbx";
import Books from './pages/BookSearch'
import FavoriteBooks from './pages/BookFavorites'
import NoPage from './pages/NoPage'


function App () {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/favorites" render={() => <FavoriteBooks title={this.state.title}/>} />
          <Route component={NoPage} />
        </Switch>
      </Router>
    );
}

export default App;
