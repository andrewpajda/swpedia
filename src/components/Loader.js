import React from 'react';
import InlineSVG from 'react-svg-inline';
import loadingIcon from '../assets/LOADING.svg';

const Loader = () => {
  return (
    <div id="loader">
      <InlineSVG svg={loadingIcon} className="loader-icon"/>
    </div>
    );
}
 
export default Loader;