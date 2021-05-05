import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {pageAnimation, fade} from '../animation'
import useScroll from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'
import music1 from '../images/musicMain.png'
import temp1 from '../images/temp1.png'
import cafe1 from '../images/cafe1.png'
import mailio1 from '../images/mailio1.png';
import safe1 from '../images/safe1.png';
import authors2 from '../images/authors2.png';
import igniteMain from '../images/igniteMain.png'
import weather1 from '../images/weather1.png';
import Nav from '../components/Nav'

const OurWork = () => {
    const [element, controls] = useScroll();
    // const [element2, controls2] = useScroll();
    return (
      <Wrapper>
        <Nav />

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
        
        <Movie variants={controls}>
            <Link to="/work/music">
              <img src={music1} alt="music" />
            </Link>
        </Movie>
  
        <Movie ref={element} variants={fade} >
            <Link to="/work/authors">
              <img src={authors2} alt="authors" />
            </Link>
        </Movie>
  
        <Movie ref={element} variants={fade}>
            <Link to="/work/cafe">
              <img src={cafe1} alt="code cafe" />
            </Link>
        </Movie>

        <Movie className="span3" ref={element} variants={fade}>
            <Link to="/work/mailio">
              <img src={mailio1} alt="mailio" />
            </Link>
        </Movie>
  
        <Movie ref={element} variants={fade}>
            <Link to="/work/safe-travel">
              <img src={safe1} alt="goodtimes" />
            </Link>
        </Movie>

        <Movie ref={element} variants={fade}>
            <Link to="/work/temp-era">
              <img src={temp1} alt="temp" />
            </Link>
        </Movie>

        <Movie ref={element} variants={fade}>
            <Link to="/work/weather">
              <img src={weather1} alt="temp" />
            </Link>
        </Movie>

        <Movie ref={element} variants={fade}>
            <Link to="/work/games">
              <img src={igniteMain} alt="temp" />
            </Link>  
        </Movie>

        <ScrollTop />
        
        </Work>
      
        </Wrapper>
    );
  };

  const Wrapper = styled.nav``
  
  const Work = styled(motion.div)`
    display: grid;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:8px;
    margin-top: 30px;
    padding: 0rem 8rem;

    @media (max-width: 1300px) {
      padding: 2rem 2rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 700px) {
      padding: 2rem 2rem;
      grid-template-columns: 1fr 1fr ;
    }
    @media (max-width: 450px) {
      padding: 2rem 2rem;
  
      justify-content:center;
      justify-content:center;
    }

  `;

  const Movie = styled(motion.div)`
    margin: 3px;
    object-fit:cover;
    object-position:center;
    overflow:hidden;
    width: 100%;
    height: 250px;
    border-radius:20px;

    img {
      width: 100%;
      height: 100%;
      opacity: 80%;
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
      height: 150px;
     
    }
  `;


  // const Hide = styled.div`
  //   overflow: hidden;
  // `;
  
  //Frame Animation
  // const Frame1 = styled(motion.div)`
  //   position: fixed;
  //   left: 0;
  //   top: 10%;
  //   width: 100%;
  //   height: 100vh;
  //   background: #fffebf;
  //   z-index: 2;
  // `;

  // const Frame2 = styled(Frame1)`
  //   background: #ff8efb;
  // `;

  // const Frame3 = styled(Frame1)`
  //   background: #8ed2ff;
  // `;

  // const Frame4 = styled(Frame1)`
  //   background: #8effa0;
  // `;
  
  export default OurWork;