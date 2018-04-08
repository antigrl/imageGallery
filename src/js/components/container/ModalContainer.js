import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Overlay, Viewport, Item, Content, Element, Caption, CloseBtn, Cross } from '../presentational/Modal';
import InputContainer from './InputContainer';

class ModalContainer extends Component {
  render() {
    return (
      <Wrapper id={this.props.image.id} visible={this.props.visible} tabindex="0">
        <Overlay visible={this.props.visible} />
        <Viewport>
          <Item>
            <Content>
              <Element visible={this.props.visible}>
                <img src={this.props.image.url} alt={this.props.image.title} />
                <Caption>{this.props.image.title}</Caption>
                <InputContainer num={this.props.image.id}/>
              </Element>
 
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