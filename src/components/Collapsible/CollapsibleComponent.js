import React from 'react'
import propTypes from 'prop-types';

import Collapsible from 'react-collapsible';
import CollapsibleTrigger from './CollapsibleTrigger';

import openIcon from '../../assets/ARROW OPEN.svg?inline';
import closeIcon from '../../assets/ARROW CLOSE.svg?inline';


const CollapsibleComponent = (props) => {
  return (
    <Collapsible
      trigger={
        <CollapsibleTrigger
          headerText={props.headerText}
          icon={openIcon}
        />
      }

      triggerWhenOpen={
        <CollapsibleTrigger
          headerText={props.headerText}
          icon={closeIcon}
        />
      }

      transitionTime={100}
      onOpening=
      {
        () => {
          if (props.onOpening) {
            props.onOpening(props.film.id)
          }
        }
      }

    >
      {props.content}
    </Collapsible>
  );
}

CollapsibleComponent.propTypes = {
  film: propTypes.object,
  headerText: propTypes.string.isRequired,
  onOpening: propTypes.func, //optional
  content: propTypes.element.isRequired
}

export default CollapsibleComponent;