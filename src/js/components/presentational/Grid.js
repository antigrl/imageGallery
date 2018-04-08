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
    padding: 0.5rem;
    flex-basis: 100%;
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
  min-height: 150px;
  display: flex;
  a {
    display: block;
    margin: 0 auto;
  }
`;
