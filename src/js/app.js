import 'babel-polyfill';
import 'isomorphic-fetch';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import baseStyles from './components/presentational/Base';
import GridContainer from './components/container/GridContainer';
import ModalContainer from './components/container/ModalContainer';

class Main extends React.Component {
  render() {
    return (
      <GridContainer />
    )
  }
}

const render = () => {
  baseStyles()
  
  ReactDOM.render(<Main />, document.getElementById('app'))
}

render()