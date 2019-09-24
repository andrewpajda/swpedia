import React, { Component } from 'react'
import axios from 'axios';
import InlineSVG from 'react-svg-inline';
import deleteIcon from '../assets/DELETE.svg';

class Form extends Component {
  state = {
    titleInput: '',
    planetInput: '',
    errorMessage: '',
    showError: false,
    planetDatalist: [],
    chosenPlanets: []
  }
  render() {
    return (
      <form className="form" autoComplete="off">
        <label className="form-label"  htmlFor="title">Title</label>
        <input
          type="text"
          className="form-input"
          name="title"
          placeholder="Please enter the title of the movie"
          value={this.state.titleInput}
          onChange={this.handleTitleChange}
        />
        {
          this.state.showError ?
            <span
              className="form-input-error"
            >{this.state.errorMessage}</span>
            :
            null
        }
        <div className="chosen-planets">
          {
            this.state.chosenPlanets.map(planet => {
              return (
                <div className="planet-icon" key={planet.name} onClick={() => {this.deletePlanet(planet.name)}}>
                  <p className="planet-name">{planet.name}</p>
                  <InlineSVG className="delete-icon" svg={deleteIcon} width={'13px'} height={'13px'}/>
                </div>
              )
            })
          }
        </div>
        <label className="form-label" htmlFor="title">Add Planet</label>
        <input
          type="text"
          className="form-input"
          id="planet-search-input"
          placeholder="Search for the planet in the database"
          value={this.state.planetInput}
          onChange={this.handlePlanetChange}
        />        
        <div className="planet-list-container">
          <ul className="planet-list">
            {
              this.state.planetDatalist.map(planet => {
                return (
                  <li
                    className="planet-list-item"
                    key={planet.name}
                    data-url={planet.url}
                    onClick={() => {
                      this.choosePlanet(planet)
                    }}
                  >{planet.name}</li>
                )
              })
            }
          </ul>
        </div>
        <input
          type="submit"
          value="ADD MOVIE"
          className={
            this.state.showError?
            "form-submit-button --disabled" : "form-submit-button"
          }
          onClick={this.handleSubmit}          
        />
      </form>
    );
  }

  handleTitleChange = (e) => {
    this.setState({
      titleInput: e.target.value
    }, () => {
      this.checkIfStartsWithCapital();
    })
  }

  checkIfStartsWithCapital = () => {    
    if (/[A-Z]/.test(this.state.titleInput[0]) === false && this.state.titleInput.length > 0) {
      this.showError(true, false, false);
    } else {
      this.hideError();
    }
  }

  handlePlanetChange = (e) => {
    this.setState({
      planetInput: e.target.value
    }, () => {
      axios.get(`https://swapi.co/api/planets/?search=${this.state.planetInput}`)
        .then(res => this.populatePlanetDataList(res.data))
        .catch(err => console.log(err))
    })
  }

  populatePlanetDataList = (data) => {
    let planets = []
    data.results.map(result => {
      planets = [...planets, {
        name: result.name,
        url: result.url
      }]
    })
    this.setState({
      planetDatalist: planets
    })
  }

  choosePlanet = (planet) => {
    let chosenPlanets = this.state.chosenPlanets;
    if (!chosenPlanets.includes(planet)) {
      chosenPlanets = [...chosenPlanets, planet]    
      this.setState({
        chosenPlanets: chosenPlanets,
        planetInput: '',
        planetDatalist: []
      })
    }
  }

  deletePlanet = (name) => {
    let planets = this.state.chosenPlanets;
    let newPlanets = planets.filter(planet => planet.name !== name)
    this.setState({
      chosenPlanets: newPlanets 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();  
    let titleTooShort = this.movieTitleIsTooShort();  
    let planetsEmpty = this.chosenPlanetsAreEmpty(); 
    if (titleTooShort || planetsEmpty) {
      this.showError(false, titleTooShort, planetsEmpty);
    } else {
      this.hideError();
      this.props.addMovie(this.state.titleInput, this.state.chosenPlanets)
      this.setState({
        titleInput: '',
        planetInput: '',
        chosenPlanets: []
      })
    }
  }
    
  chosenPlanetsAreEmpty = () => {    
    return this.state.chosenPlanets.length === 0 
  }

  movieTitleIsTooShort = () => {
    return this.state.titleInput.length < 3 
  }

  showError = (titleNotCapital = false, titleTooShort = false, planetsEmpty = false) => {
    let titleNotCapitalError = titleNotCapital ? '* Movie title name must start with a capital letter.' : ''
    let titleTooShortError = titleTooShort ? '* Movie title must be at least 3 letters long.' : ''
    let planetsEmptyError = planetsEmpty ? '* You need to choose at least one planet.' : ''  
    let errorMessage = `${titleNotCapitalError} ${titleTooShortError} ${planetsEmptyError}`;
    this.setState({
      showError: true,
      errorMessage: errorMessage
    })
  }

  hideError = () => {
    this.setState({
      errorMessage: '',
      showError: false,
    })
  }
}

export default Form;