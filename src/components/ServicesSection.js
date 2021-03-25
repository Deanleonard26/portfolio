import React from "react";
//Import Icons
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import {scrollReveal} from '../animation'
import useScroll from './useScroll';
import music1 from '../images/music1.png'
import temp1 from '../images/temp1.png'
import cafe1 from '../images/cafe1.png'
import mailio1 from '../images/mailio1.png';
import safe1 from '../images/safe1.png';
import authors2 from '../images/authors2.png';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          My <span>Portfolio</span> 
        </h2>
        <div className='portfolio-info'>
        <p>Below are some of the projects I have worked on during my time in the Wild Code School Bootcamp, along with my self learning courses.</p>
        <button> See More</button>
        </div>
        <Cards>
          <Card>
            <div className="icon">
            <a href=' https://the-authors.netlify.app/' target='blank'>
              <img alt="music app" src={authors2} />
              </a>
              {/* <h3>Efficient</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={temp1} />
              {/* <h3>Teamwork</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={cafe1} />
              {/* <h3>Diaphragm</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
            <a href=' https://vigilant-sammet-febf50.netlify.app/' target='blank'>
              <img alt="icon" src={mailio1} />
              </a>
              {/* <h3>Affordable</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
            <a href='https://brave-spence-b5da41.netlify.app/' target="blank">
              <img alt="icon" src={music1} />
              </a>
              {/* <h3>Affordable</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
            <a href='https://zen-albattani-4c735b.netlify.app/' target='blank'>
              <img alt="icon" src={safe1} />
              </a>
              {/* <h3>Affordable</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
        
        </Cards>
      </Description>
      {/* <Image>
        <img alt="camera" src={home2} />
      </Image> */}
    </Services>
  );
};

const Services = styled(About)`
  margin-bottom:15rem;

  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 800px) {
   padding: 1rem 2rem
  }
`;

const Cards = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:2px;
  
  @media (max-width: 1300px) {
    justify-content: left;
  }
  
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
 width: 100%;
 object-fit:cover;
 overflow:hidden;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      
      background: white;
      color: black;
      
    }
  }
  img {
    object-fit:cover;
    margin:0;
    padding:0;
    width:100%;
    height:250px;
    opacity:60%;
  }

  img:hover {
    opacity: 100%;
    transition: transform .4s;
    transform: scale(1.1);
    cursor:pointer;
  }


`;

export default ServicesSection;