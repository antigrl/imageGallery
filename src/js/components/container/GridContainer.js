import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { Wrapper, GridList, GridItem } from '../presentational/Grid';

const size = 25;

class GridContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('Click happened');
    e.preventDefault();
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(results => {
      return results.json();
    })
    .then(data => {
      const items = data.slice(0, size);
      this.setState({
        items: items,
      })
    })
  }
  
  render() {
    return (
      <Wrapper>
      <GridList>
      {this.state.items.map((item, id) => {
        return (
          <GridItem key={item.id}>
            <a href={item.url} onClick={this.handleClick}>
              <img src={item.thumbnailUrl} alt={item.title} />
            </a>
          </GridItem>
        )
      })}
      
      </GridList>
      </Wrapper>
    );
  }
}

export default GridContainer;