import React from "react";
//Import Icons
//Styles
import { About} from "../styles";
import styled from "styled-components";
import {scrollReveal} from '../animation'
import useScroll from './useScroll';
import {Link} from 'react-router-dom'
import music1 from '../images/music1.png'
import temp1 from '../images/temp1.png'
import cafe1 from '../images/cafe1.png'
import mailio1 from '../images/mailio1.png';
import safe1 from '../images/safe1.png';
import authors2 from '../images/authors2.png';
import igniteMain from '../images/igniteMain.png'
import weather1 from '../images/weather1.png';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description1>
        <h2>
          My <span>Portfolio</span> 
        </h2>
        <div className='portfolio-info'>
        <p>Below are some of the projects I have worked on during my time in the Wild Code School Bootcamp, along with my self learning courses.</p>
        <Link to="/work"  style={{ textDecoration: "none" }}>
        <button> See More</button>
        </Link>
        </div>
        <Link to="/work"  style={{ textDecoration: "none" }}>
        <Cards >
          <Card>
            <div className="icon">
         
              <img alt="music app" src={authors2} />
             
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
              <img alt="icon" src={mailio1} />
              {/* <h3>Affordable</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={music1} />
              {/* <h3>Affordable</h3> */}
            </div>
            {/* <p>Lorem ipsum dolor sit amet.</p> */}
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={safe1} />
              {/* <h3>Affordable</h3> */}
            </div>
           
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={weather1} />
              {/* <h3>Affordable</h3> */}
            </div>
           
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={igniteMain} />
              {/* <h3>Affordable</h3> */}
            </div>
           
          </Card>
        </Cards>
        </Link>
      </Description1>
      {/* <Image>
        <img alt="camera" src={home2} />
      </Image> */}
    </Services>
  );
};

const Description1 = styled.div`
  flex: 1;
  z-index:2;
  width:100%;
  margin-bottom:2rem;
  margin-top:3rem;

  h2 {
    font-weight: lighter;
    font-size:75px;
  }

  button {
    outline:none;
    width:150px;

  }
  
  .portfolio-info {
    p {
      width: 60%;
    }
    
    button {
      height:50px;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      margin: 2rem 0rem 5rem 0rem; 
      text-decoration: none;
      
    }
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between

    
  }

      @media (max-width: 1300px) {
        padding:0;
        
        /* h2 {
          font-weight: lighter;
          font-size:40px;
        } */

        button {
          margin: 2rem 0rem 0rem 0rem; 
        }
      }

      @media (max-width: 835px) {
        h2 {font-size: 50px;
        }
      }

      @media (max-width: 800px) {
          .portfolio-info {
          p {
            font-size:13px;
        }
          button {
          align-items:center;
          width: 100px;
        }
      }
      }

      @media (max-width: 450px) {
      
          .portfolio-info {
          p {
            font-size:10px;
        }
          button {
          align-items:center;
          width: 90px;
        }
      }
      }

  
`;

const Services = styled(About)`
  margin-bottom:15rem;
  width:100%;

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:5px;
  
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
    height:200px;
    opacity:80%;
  }

  img:hover {
    opacity: 100%;
    transition: transform .4s;
    transform: scale(1.1);
    cursor:pointer;
  }

  @media (max-width: 400px){
    img {
      height: 140px;
    }
  }

  @media (min-width: 1300px){
    img {
      height: 290px;
    }
  }


`;

export default ServicesSection;