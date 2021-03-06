import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  // top: 15px;
  right: 20px;
  z-index: 10;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    z-index: 1;
    height: 0.20rem;
    background-color: ${({ open }) => open ? '#FFFFFF' : '#FFFFFF'};
    border-radius: 10px;
    // transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'translateX(45%)' : 'translateX(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(45%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}
export default Burger