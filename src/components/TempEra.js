import React from "react";
import styled from "styled-components";
import temp1 from "../images/temp1.png";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {titleAnim, pageAnimation, fade} from '../animation';

const TempEra = () => {

  return (
    <StoryWrapper variants={fade}>
      <ImgWrapper >
        <img src={temp1} alt='code cafe' /> 
      </ImgWrapper>
      <StorySection>
      <CloseButton>
        <Link to="/work">
              <h1>X</h1>
            </Link>
      </CloseButton>
         <motion.div exit='exit' variants={pageAnimation} initial="hidden" animate="show">
          <Hide>
        <motion.h2 className='titleText' variants={titleAnim}>Temp Era</motion.h2>
          </Hide>
          <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.h4 className='titleText' variants={titleAnim}>First Hackathon in Wild Code School</motion.h4>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>24 hour hackathon</motion.p>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          For our first Hackathon, we were tasked to create an app in 24 hours that would be sent back in time to the period of your choice to help make life easier. We decided to create a colorizer applicaiton that would be sent back to the victorian/steampunk era. The app was only available for tablets as that was the device that we would be sending back to the victorian time. 
        </motion.p>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          When the user turns on the tablet, they will be introduced with a welcome message and some instructions. From there they weill be taken to the section of the app that allows them to upload an black and white image. Then, they can press a button to colorize the image. For this hackathon we pulled images from an images API. We then used a simple function to greyscale the image and when you clicked the colorize button, the image would go back to its original.
        </motion.p>
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


export default TempEra;