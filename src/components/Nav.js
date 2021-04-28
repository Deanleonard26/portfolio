import React from 'react'
import styled from 'styled-components';
// import {Link} from 'react-router-dom'
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import logo from '../images/3.png'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        About 
      </a>
      <a href="/work">
        Projects
        </a>
        <a href="/drone">
        Drone
        </a>
      <a href="/contact">
        Contact
        </a>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
  return (

    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>

  )
}

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <BurgerWrapper>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </BurgerWrapper>
  )  
}


const StyledMenu = styled.nav`
  display: flex;
  width:100vw;
  z-index:5;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  line-height: 5rem;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    
  }
`


const BurgerWrapper = styled.div`
  width:100%;
  height: 100px;
  display:flex;
  justify-content:center;
  align-items: center;
  z-index: 100;
`

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right:5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:hover {
    background-color:transparent;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.28rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export default Nav;