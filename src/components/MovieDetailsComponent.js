import React from 'react';
import propTypes from 'prop-types';

import Table from './Table/TableComponent';
import TableMobile from './Table/TableMobileComponent'; 
import Loader from './LoaderComponent';

const isMobile = window.innerWidth < 769

const MovieDetails = (props) => {
  return (
    <div className="movie-details">
      {
        props.film.planets.length ?
          isMobile ?
            <TableMobile
              data={props.film.planets}              
            />
            :
            <Table
              data={props.film.planets}
            />
        :
            <Loader
              loaderClassName="loader-small"
              loaderIconClassName="loader-icon-small"
            />
      }
    </div>
  );
}

MovieDetails.propTypes = {
  film: propTypes.object.isRequired
}
export default MovieDetails;