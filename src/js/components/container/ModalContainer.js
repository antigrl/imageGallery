import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Wrapper, Overlay, Viewport, Item, Content, Element, CloseBtn, Cross } from '../presentational/Modal';

class ModalContainer extends Component { 
  render() {
    if(!this.props.visible) {
      return null;
    }
    console.log('rendering modal container');
    console.log(this.props);
    return (
      <Wrapper visible={this.props.visible} tabindex="0">
        <Overlay visible={this.props.visible} />
        <Viewport>
          <Item>
            <Content>
              <Element src={this.props.image.url}/>
            </Content>
          </Item>
        </Viewport>
        <CloseBtn onClick={this.props.onClose}>
          <Cross />
        </CloseBtn>
      </Wrapper>
    );
  }
}

export default ModalContainer;