import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {pageAnimation, fade} from '../animation'
import useScroll from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

import music1 from '../images/music1.png'
import temp1 from '../images/temp1.png'
import cafe1 from '../images/cafe1.png'
import mailio1 from '../images/mailio1.png';
import safe1 from '../images/safe1.png';
import authors2 from '../images/authors2.png';
import MusicDescription from '../components/TempEra'

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
      <Work
        // style={{ background: "#fff" }}
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        {/* <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div> */}
        <Movie>
          <motion.h2  ref={element} animate={fade}></motion.h2>
          <a href='https://brave-spence-b5da41.netlify.app/' target="blank">
              <img src={music1} alt="music" />
              </a>
        </Movie>
  
        <Movie ref={element}  animate={fade} >
          {/* <motion.div variants={lineAnim} className="line"></motion.div> */}
          <a href=' https://the-authors.netlify.app/' target='blank'>
            <img src={authors2} alt="authors" />
            </a>
        </Movie>
  
        <Movie
          ref={element}
          variants={fade}
        >
          <Link to="/work/cafe">
            <img src={cafe1} alt="code cafe" />
          </Link>
        </Movie>

  
        <Movie
        className="span3"
          ref={element}
          variants={fade}
        >
        <a href=' https://vigilant-sammet-febf50.netlify.app/' target='blank'>
            <img src={mailio1} alt="mailio" />
          </a>
        </Movie>
        <div className="span1"></div>
  
        <Movie
          ref={element}
          variants={fade}
        >
        <a href='https://zen-albattani-4c735b.netlify.app/' target='blank'>
            <img src={safe1} alt="goodtimes" />
          </a>
        </Movie>

  
        <Movie
          ref={element}
          variants={fade}
        >
          <Link to="/work/temp-era">
            <img src={temp1} alt="temp" />
          </Link>
        </Movie>

        <ScrollTop />
      </Work>
    );
  };
  
  const Work = styled(motion.div)`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    margin-top: 30px;

    @media (max-width: 1300px) {
      padding: 2rem 2rem;
    }
    h2 {
      font-size:30px;
      padding: 0rem;
      color: white;
    }

  `;

  const Movie = styled(motion.div)`
    display:flex;
    margin: 10px;
    object-fit:cover;
    overflow:hidden;
      
    .line {
      height: 3rem;
      background: #23d997;
    }
    
    img {
      width: 400px;
      height: 280px;
      opacity: 70%;
      object-fit:cover;

      &:hover {
        opacity: 100%;  
        transition: transform .4s;
        transform: scale(1.1);
        cursor:pointer;      
      }
    }

    @media (max-width: 500px) {
      width:100%;
      
      img {
        object-fit:cover;
        width:320px;
      }
    }
  `;


  const Hide = styled.div`
    overflow: hidden;
  `;
  
  //Frame Animation
  const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
  `;

  const Frame2 = styled(Frame1)`
    background: #ff8efb;
  `;

  const Frame3 = styled(Frame1)`
    background: #8ed2ff;
  `;

  const Frame4 = styled(Frame1)`
    background: #8effa0;
  `;
  
  export default OurWork;