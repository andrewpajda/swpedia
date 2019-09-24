import React from 'react';
import propTypes from 'prop-types';

import CollapsibleComponent from '../components/Collapsible/CollapsibleComponent';
import Form from '../components/FormComponent';

const AddMovie = (props) => {
  return (
    <div id="add-movie">
      <CollapsibleComponent 
        headerText="Add Movie"
        content={<Form addMovie={props.addMovie}/>}
      />
    </div>
  );
}

AddMovie.propTypes = {
  addMovie: propTypes.func.isRequired
}
export default AddMovie;
