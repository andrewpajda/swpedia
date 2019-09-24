import React, { Component } from 'react'
import propTypes from 'prop-types';

import CollapsibleComponent from './Collapsible/CollapsibleComponent';
import MovieDetails from './MovieDetailsComponent';

class ResultList extends Component {
  state = {}
  render() {
    return (
      <div className="result-list">
        {
          this.props.films.map((film) => {
            return (
              <CollapsibleComponent
                film={film}
                key={film.id}                               
                headerText={film.title} 
                onOpening={this.props.fetchPlanets}
                content={
                  <MovieDetails
                    film={film}
                  />
                }
              />
            )
          })
        }
      </div>
    );
  }
}

ResultList.propTypes = {
  films: propTypes.array.isRequired,
  fetchPlanets: propTypes.func.isRequired
}

export default ResultList;