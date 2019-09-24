import React from 'react';
import InlineSVG from 'react-svg-inline';
import loadingIcon from '../assets/LOADING.svg';

const LoaderComponent = (props) => {
  return (
    <div className={props.loaderClassName}>
      <InlineSVG svg={loadingIcon} className={`${props.loaderIconClassName} loader-icon`}/>
    </div>
    );
}
 
export default LoaderComponent;