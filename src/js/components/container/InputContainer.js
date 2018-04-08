import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../presentational/Input';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: `description${this.props.num}`,
      value: '',
    }
    if (localStorage.getItem(this.state.store)) {
      this.state.value = localStorage.getItem(this.state.store)
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });

    localStorage.setItem(this.state.store, event.target.value);
  }
  render() {
    return (
        <Input
          text="Enter Description"
          label="enterDescription"
          type="text"
          id="enterDescription"
          value={this.state.value}
          handleChange={this.handleChange}
        />
    );
  }
}
export default InputContainer;

