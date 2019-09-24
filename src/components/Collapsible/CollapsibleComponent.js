import React from 'react'
import Collapsible from 'react-collapsible';
import CollapsibleTrigger from './CollapsibleTrigger';
import openIcon from '../../assets/ARROW OPEN.svg';
import closeIcon from '../../assets/ARROW CLOSE.svg';


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
            props.onOpening(props.model.id)
          }
        }
      }

    >
      {props.content}
    </Collapsible>
  );
}

export default CollapsibleComponent;