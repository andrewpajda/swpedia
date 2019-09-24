import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';

import {FILMS_URL} from './utilities/constants';

import App from './App';

ReactDOM.render(<App url={FILMS_URL} />, document.getElementById('root'));
