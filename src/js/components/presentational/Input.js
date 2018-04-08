import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  overflow: hidden;
  padding: 2rem;
  margin-left: 2rem;
  label {
    display: block;
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const InputStyle = styled.input`
  background-color: #fff;
  border-radius: .125rem;
  border: 0;
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  color: #000;
`;
const Input = ({ label, text, type, id, value, handleChange }) => (
  <Wrapper>
    <label htmlFor={label}>{text}</label>
      <InputStyle
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
      />
  </Wrapper>

  );
  
  Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  };

export default Input;