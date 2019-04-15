import React, { Component } from 'react';
import Header from "../components/Header"
import Favorites from "../components/Favorites"

function FavoriteBooks (props) {

  return (
    <div>
      <Header />
      <Favorites title={props.title}/>
    </div>
  )
}

export default FavoriteBooks