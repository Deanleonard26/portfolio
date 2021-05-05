import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {titleAnim, pageAnimation} from '../animation'
import safe1 from "../images/safeMain.jpg";

const SafeTravelsPage = () => {

  return (
    <StoryWrapper variants={pageAnimation}
    initial="hidden"
    animate="show">
      <ImgWrapper >
        <img src={safe1} alt='code cafe' /> 
      </ImgWrapper>
      <StorySection>
      <CloseButton>
        <Link to="/work">
              <h1>X</h1>
            </Link>
      </CloseButton>
         <motion.div exit='exit' variants={pageAnimation} initial="hidden" animate="show">
          <Hide>
        <motion.h2 className='titleText' variants={titleAnim}>Safe Travel Covid Website</motion.h2>
          </Hide>
          <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.h4 className='titleText' variants={titleAnim}>Second Group Project - Wild Code School</motion.h4>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>React/Scss/API</motion.p>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          For our second group project in wild code school we created our first react application. As this was created during covid 19, we created a safe travel website where the user can visit and see the infection rate in countries around the world, along with booking flights, and informaiton avbout the main tourist attractions in these countries
        </motion.p>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          When creating this application we first started off by using figma to create wireframes, we then used React, Scss, Google maps API & a travel API. Some of the main features of the app is the ability to search for flight information and prices, see up to date statistics on virus rates in each country, and see the main attractions in major european cities.
        </motion.p>
        </Hide>
        <Hide>
        <motion.button 
         className='titleText' variants={titleAnim}
          ><a href='https://codingcafe.netlify.app/' target='blank'>View Website </a></motion.button>
        </Hide>
      </motion.div>
      </StorySection>
    </StoryWrapper>
  );
};

// SECTION 1

const StoryWrapper = styled(motion.div)`
  display:flex;
  flex-flow: row wrap-reverse;
  width:100vw;
  height: 100vh;
  background-color:white;

  button {
      margin-top:30px;
      color:black;
      text-decoration: none;
      outline:none;
  }

  a {
      text-decoration:none;
      outline:none;
      color:black;
  }

  @media (max-width: 1000px){
    width:100%;
    min-height:100vh;
    overflow:scroll;
  }

`

const ImgWrapper = styled(motion.div)`
  width:48%;
  height: 100vh;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;

  img {
    width: 60%;
    height: auto;
  }
  
  @media (max-width: 1000px){
    display:none;

  }
`

const StorySection = styled(motion.div)`
  width:50%;
  margin-left: 20px;
  padding-top:20px;

  h1 {
    padding: 0.5rem 0rem;
  }

  h4 {
    padding: 0.5rem 0rem;
    margin-top:15px;
  }

  p {
    width: 90%;
    margin-top:15px;
    padding: 0.5rem 0rem;
    color: black;
  }

  hr {
    width: 5%;
    height: 5px;
    background-color:green;
  }

  @media (max-width: 1000px){
    
    width: 100%;
    height: auto;
    margin: 30px 0 30px 20px;
  }

  @media (max-width:500px){
    width: 100%;
    height: auto;

    h1 {
    padding: 0.5rem 0rem;
    font-size: 10px;
  }

  h4 {
    padding: 0.5rem 0rem;
    margin-top:10px;
  }

  p {
    width: 90%;
    margin-top:15px;
    font-size:13px;
    
  }

  hr {
    width: 15%;
    height: 5px;
    margin-bottom:10px
  }

  }
`

const CloseButton = styled(motion.div)`
width: 100%;
display:flex;
justify-content:flex-end;
padding-right:50px;
cursor: pointer;

h1 {
  font-size:30px;
  text-decoration:none;
  outline:none;
  color:black
}
`

const Hide = styled(motion.div)`
  overflow: hidden;
`;

export default SafeTravelsPage;