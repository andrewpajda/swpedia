import React, { Component } from 'react';

import Header from './components/Header';
import Loader from './components/Loader';
import AddMovie from './components/AddMovie';

class App extends Component {
  state = {
    films: []
  }
  render() {
    return (
      <div id="app">
        <Header />
        <Loader />
        <AddMovie />
      </div>
    );
  }  
}

export default App;


