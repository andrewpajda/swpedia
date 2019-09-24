import React, { Component } from 'react'
import CollapsibleComponent from './Collapsible/CollapsibleComponent';
import propTypes from 'prop-types';
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
                model={film}
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
  films: propTypes.array
}

export default ResultList;