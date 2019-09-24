import React from 'react';
import propTypes from 'prop-types';

import InlineSVG from 'react-svg-inline';

import loadingIcon from '../assets/LOADING.svg?inline';

const LoaderComponent = (props) => {
  return (
    <div className={props.loaderClassName}>
      <InlineSVG svg={loadingIcon} className={`${props.loaderIconClassName} loader-icon`}/>
    </div>
    );
}

LoaderComponent.propTypes = {
  loaderClassName: propTypes.string,
  loaderIconClassName: propTypes.string,
}
 
export default LoaderComponent;