import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transform: translateY(${props => props.visible ? '0' : '100%'});
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 500ms ease;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.75);
`;

export const Viewport = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
`;

export const Item = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  height: 100%;
`;

export const Element = styled.div`
  opacity: ${props => props.visible ? '1' : '0'};
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  width: 90%;
  transform: translate(-50%, -50%);
  transition: opacity 500ms ease 500ms;
  img {
    max-height: 80vh;

    margin: 0 auto;
    @media (min-width: 48em) {
      width: 50%;
      float: left;
    }
  }
`;

export const Caption = styled.p`
  overflow: hidden;
  color: #fff;
  font-size: 1.5rem;
  padding: 2rem;
  margin: 0 0 1rem;
  text-align: center;
  @media (min-width: 48em) {
    text-align: left;
  }
`;

export const CloseBtn = styled.button`
  padding: 1rem;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Cross = styled.div`
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  color: #ffffff;
  &::before,
  &::after {
    position: absolute;
    left: 50%;
    height: 100%;
    margin-left: -.0625rem;
    border-left: .125rem solid;
    content: "";
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`