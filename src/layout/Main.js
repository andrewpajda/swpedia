import React from 'react';
import propTypes from 'prop-types';

import LoaderComponent from '../components/LoaderComponent';
import ResultList from '../components/ResultListComponent';

const Main = (props) => {
  return (
    <section id="main">
      {
        props.films.length > 0 ?
          <ResultList
            films={props.films}
            fetchPlanets={props.fetchPlanets}                        
          /> :
          <LoaderComponent
            loaderClassName="loader-large"
            loaderIconClassName="loader-icon-large"
          />
      }
    </section>
  );
}

Main.propTypes = {
  films: propTypes.array.isRequired,
  fetchPlanets: propTypes.func.isRequired
}

export default Main;