import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 90rem;
  margin: 2rem auto;
  padding-right: 2rem;
  padding-left: 2rem;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const GridList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 -0.5rem;
  & > * {
    width: 100%;
    padding: 0.5rem;
    @media (min-width: 32em) {
      flex-basis: 45%;
    }
    @media(min-width: 48em) {
      flex-basis: 25%;
    }
    @media (min-width: 64em) {
      flex-basis: 17.25%;
    }
  }
`;

export const GridItem = styled.li`
  background-color: black;
  height: 10rem;
  margin: 0.5rem;
`;
