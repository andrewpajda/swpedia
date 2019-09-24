import React from 'react';
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

export default AddMovie;
