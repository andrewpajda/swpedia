import React from 'react';
import propTypes from 'prop-types';
import InlineSVG from 'react-svg-inline';

const CollapsibleTrigger = (props) => {
  return (
    <React.Fragment>
      <h3
        className="Collapsible__trigger_header"
      >{props.headerText}</h3>
      <InlineSVG
        component="div"
        svg={props.icon}
        className="Collapsible__trigger_icon"
      />
    </React.Fragment>
  );
}

export default CollapsibleTrigger;