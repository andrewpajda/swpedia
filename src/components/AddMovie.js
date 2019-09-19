import React from 'react';
import CollapsibleComponent from './Collapsible/CollapsibleComponent';

const AddMovie = () => {
  return (
    <div id="add-movie">
      <div className="add-movie-form">
        <CollapsibleComponent headerText="Add Movie" />
      </div>
    </div>
  );
}

export default AddMovie;


