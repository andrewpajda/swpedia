import React from 'react';
import TableComponent from './TableComponent';
import Loader from './LoaderComponent';
import MOVIE_COLUMNS from '../utilities/constants';

const MovieDetails = (props) => {
  return (
    <div className="movie-details">
      {
        props.film.planets.length ?
        <TableComponent 
          data={props.film.planets}
          columns={MOVIE_COLUMNS}
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
 
export default MovieDetails;