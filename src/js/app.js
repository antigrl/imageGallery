import React, { Component } from "react";
import ReactDOM from "react-dom";

import baseStyles from './components/presentational/Base'
import ModalContainer from "./components/container/ModalContainer";

class Main extends React.Component {
  render() {
    return (
      <ModalContainer />
    )
  }
}

const render = () => {
  baseStyles()
  
  ReactDOM.render(<Main />, document.getElementById('app'))
}

render()