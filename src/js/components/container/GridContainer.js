import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { Wrapper, GridList, GridItem } from '../presentational/Grid';
import ModalContainer from './ModalContainer';
const size = 25;

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: '',
      items: [],
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal(item) {
    this.setState({
      photoIndex: item,
      showModal: !this.state.showModal
    });
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
      <div>
      <Wrapper>
      <GridList>
      {this.state.items.map((item) => {
        return (
          <GridItem key={item.id}>
            <a href={item.url} onClick={ (e) => {
              this.toggleModal(item);
              e.preventDefault();
            }}>
            <img src={item.thumbnailUrl} alt={item.title} />
            </a>
          </GridItem>
        )
      })}
      </GridList>
      </Wrapper>
      <ModalContainer
        visible={this.state.showModal}
        onClose={this.toggleModal}
        image={this.state.photoIndex}
      >
      </ModalContainer>
      </div>
    );
  }
}

export default GridContainer;