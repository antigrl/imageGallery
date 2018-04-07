import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: all 500ms ease;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.75);
  opacity: ${props => props.visible ? '1' : '0'};
  transition: all 500ms ease;
`;

export const Viewport = styled.div`
  position: relative;
  height: 100%;
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

export const Element = styled.img`
  display: block;
  position: relative;
  top: 50%;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  transform: translateY(-50%);
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

export const Cross = styled.span`
  display: block;
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