import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {titleAnim} from '../animation'
import { Hide } from "../styles";
import cafe1 from "../images/cafe1.png";

const AuthorsPage = () => {

  return (
    <StoryWrapper>
      <ImgWrapper>
        <img src={cafe1} alt='temp era' /> 
      </ImgWrapper>
      <StorySection>
      <CloseButton>
        <Link to="/work">
              <h1>X</h1>
            </Link>
      </CloseButton>
         <motion.div>
          <Hide>
        <motion.h2 className='titleText' variants={titleAnim}>Code Cafe</motion.h2>
          </Hide>
          <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.h4 className='titleText' variants={titleAnim}>Hackathon</motion.h4>
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
        <motion.p className='titleText' variants={titleAnim}>Lorem Ipsum has been the iscrambled it to make a type specimen book. It has survived not 
        nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</motion.p>
        </Hide>
        <Hide>
        <motion.p>Lorem Ipsum is sr took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
         versions of Lorem Ipsum.</motion.p>
        </Hide>
        <Hide>
        <motion.button>View Website</motion.button>
        </Hide>
      </motion.div>
      </StorySection>
    </StoryWrapper>
  );
};

// SECTION 1

const StoryWrapper = styled(motion.div)`
  display:flex;
  flex-flow: row wrap;
  width:100vw;
  height: 100vh;
  background-color:white;
  position:fixed;
  overflow:hidden;
  z-index:25;

  button {
      
      color:black;
  }
`

const ImgWrapper = styled(motion.div)`
  width:48%;

  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
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
  }

  p {
    margin-top:20px;
    padding: 0.5rem 0rem;
    color: black;
  }

  hr {
    width: 10%;
    height: 5px;
    margin:0px 0 20px 2px;
    background-color:green;
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

export default AuthorsPage;