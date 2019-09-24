import React, { Component } from 'react';
import propTypes from 'prop-types';

import Header from './layout/Header';
import Main from './layout/Main';
import AddMovie from './layout/AddMovie';
import Footer from './layout/Footer'

import Movie from './models/movie';
import Planet from './models/planet';

import axios from 'axios';
import ls from 'local-storage';

class App extends Component {
  state = {
    films: []
  }
  render() {
    return (
      <div id="app">
        <Header />
        <Main
          films={this.state.films}
          fetchPlanets={this.fetchPlanets}                             
        />
        <AddMovie
          addMovie={this.addMovie}
        />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    let films = ls.get('films');
    if (!films) {
      this.fetchMovies();
    } else {
      this.setState({
        films: films
      })
    }
  }
  // id param is optional being used only when fetching planets.
  callApi = (url, callback, id = null)  => { 
    axios.get(url)
    .then(res => callback(res.data, id))
    .catch(err => console.log(err))
  }

  // Fetch movies functionality

  fetchMovies = () => {
    const url = this.props.url
    this.callApi(url, this.getMovies)    
  }
  
  getMovies = (data) => {
    let films = [];
    let id = 0;
    data.results.map(result => {
      films = [...films, new Movie(id, result.title, result.planets, [])]      
      id++;
    })    
    this.setState({
      films: films
    })
    ls.set('films', films);
  }

// Fetch planets functionality

  fetchPlanets = (id) => {
    const films = this.state.films
    if (films[id].planets.length === 0) {
      films[id].planetUrls.forEach((url) => {
        this.callApi(url, this.getPlanets, id)
      })
    }
  }

  getPlanets = (data, id) => {
    const films = this.state.films;    
    films[id].planets = [...films[id].planets,
      new Planet(
        data.name,
        data.rotation_period,
        data.orbital_period,
        data.diameter,
        data.climate,
        data.surface_water,
        data.population
        )]   
    this.setState({
      films: films
    }, this.forceUpdate());
    ls.set('films', films);      
  }

  // Add Movie functionality  

  addMovie = (title, planets) => {
    const id = this.state.films.length;
    const planetUrls = planets.map(planet => planet.url)    
    const movie = new Movie(id, title, planetUrls, [])    
    let films = this.state.films;
    films = [...films, movie]
    this.setState({
      films: films
    })
    ls.set('films', films)
  }
}

App.propTypes = {
  url: propTypes.string.isRequired
}

export default App;


