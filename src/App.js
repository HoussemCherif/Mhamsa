import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Picture from './components/picture.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Les Personnalitées </h1>
     <Picture
     image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/M._Pokora_NRJ_Music_Awards_2013_3.jpg/220px-M._Pokora_NRJ_Music_Awards_2013_3.jpg'
     title= "ggg"
     gender= "male"
     />
     <Picture
     
     image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Kim_Kardashian_portrait_2009.jpg/200px-Kim_Kardashian_portrait_2009.jpg"
     title= "ggg"
     gender= "female"
     />

     </div>
    );
  }
}

export default App;
