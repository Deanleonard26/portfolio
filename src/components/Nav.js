import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
import logo from '../images/logo.png';
import { ScrollTo } from "react-scroll-to";
import ScrollTop from './ScrollTop';

const Menu = ({ open, setOpen })  => {

  return (
    <StyledMenu open={open}>
       <Link to='/' open={open} onClick={() => setOpen(!open)}>
       <ScrollTo>
       {({ scroll }) => (
       <span onClick={() => scroll({ x: 50, y: 1950 })} className='nav-span'>About</span>  
       )}
       </ScrollTo>
       </Link>
      <Link to='/work' open={open} onClick={() => setOpen(!open)}>
      <span className='nav-span'>Projects</span> 
        </Link>
        <a href='https://www.instagram.com/deanldrone_/'>
        <span className='nav-span'>Drone</span> 
        </a>
        <Link to='/contact' open={open} onClick={() => setOpen(!open)}>
        <span className='nav-span'>Contact</span> 
        </Link>
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
    <NavWrapper>
    <LogoWrapper>
    <Link to='/'  style={{ textDecoration: "none", color: "inherit" }} >
    <img src={logo} alt='logo' />
    </Link>
    </LogoWrapper>
    <BurgerWrapper>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </BurgerWrapper>
    </NavWrapper>
  )  
}

const NavWrapper = styled.div`
  display:flex;
  flex-flow: row nowrap;
  width: 100%;

  h5 {
   width: 100%;
   font-weight: 20;
   font-size: 25px;
   color:white;
   cursor: pointer;
 }
`

const LogoWrapper = styled.div`
  width: 100%;
  margin-top:35px;
  margin-left:8%;
  
  img {
    width: 100px;
  }

  @media(max-width:500px) {
    margin-left:10%;
  }
`


const StyledMenu = styled.nav`
  display: flex;
  width:100%;
  z-index:5;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100%;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  line-height: 7rem;
  overflow-x:hidden;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    width:100%;
    font-size: 3.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    overflow-x:hidden;

    @media (max-width: 576px) {
      font-size: 2rem;
      text-align: center;
    }

    
  }

  .nav-span {
    color: black;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .nav-span:before, .nav-span:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  top: 50%;
  margin-top: -3px;
  background: black;
}

.nav-span:before {
  left: -2.5px;
}
.nav-span:after {
  right: 2.5px;
  background: black;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.nav-span:hover:before {
  background: black;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.nav-span:hover:after {
  background: transparent;
  width: 100%;
  transition: 0s;
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
  position:fixed;
  top: 5%;
  right:6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
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