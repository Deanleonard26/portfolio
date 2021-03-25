import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, slider, sliderContainer} from '../animation'
import useScroll from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

import music1 from '../images/music1.png'
import temp1 from '../images/temp1.png'
import cafe1 from '../images/cafe1.png'
import mailio1 from '../images/mailio1.png';
import safe1 from '../images/safe1.png';
import authors2 from '../images/authors2.png';

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
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        <Movie>
          <motion.h2 variants={fade}>Music Player</motion.h2>
          <Link to="/work/the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={music1} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
  
        <Movie ref={element} variants={fade} animate={controls} initial="hidden">
          <h2>The Racer</h2>
          {/* <motion.div variants={lineAnim} className="line"></motion.div> */}
          <Link to="/work/the-racer">
            <img src={authors2} alt="theracer" />
          </Link>
        </Movie>
  
        <Movie
          ref={element2}
          variants={fade}
        >
          <h2>Good Times</h2>
          <Link to="/work/good-times">
            <img src={cafe1} alt="goodtimes" />
          </Link>
        </Movie>

        <Movie
          ref={element2}
          variants={fade}
        >
          <h2>Good Times</h2>
          <Link to="/work/good-times">
            <img src={mailio1} alt="goodtimes" />
          </Link>
        </Movie>

        <Movie
          ref={element2}
          variants={fade}
        >
          <h2>Good Times</h2>
          <Link to="/work/good-times">
            <img src={safe1} alt="goodtimes" />
          </Link>
        </Movie>

        <Movie
          ref={element2}
          variants={fade}
        >
          <h2>Good Times</h2>
          <Link to="/work/good-times">
            <img src={temp1} alt="goodtimes" />
          </Link>
        </Movie>
        <ScrollTop />
      </Work>
    );
  };
  
  const Work = styled(motion.div)`
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:left;
    justify-content:center;

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
    flex-direction:column;
    align-items:left;
    justify-content:center;
      padding-bottom: 3rem;
      width:450px;
      height: 350px;
      margin:20px 10px;
      
    .line {
      height: 3rem;
      background: #23d997;
      margin-bottom: 2rem;
    }
    
    img {
      width: 100%;
      height: 300px;
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