import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {titleAnim, pageAnimation} from '../animation'
import authors from "../images/authors2.png";

const AuthorsPage = () => {

  return (
    <StoryWrapper variants={pageAnimation}
    initial="hidden"
    animate="show">
      <ImgWrapper >
        <img src={authors} alt='code cafe' /> 
      </ImgWrapper>
      <StorySection>
      <CloseButton>
        <Link to="/work">
              <h1>X</h1>
            </Link>
      </CloseButton>
         <motion.div exit='exit' variants={pageAnimation} initial="hidden" animate="show">
          <Hide>
        <motion.h2 className='titleText' variants={titleAnim}>Authxrs</motion.h2>
          </Hide>
          <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.h4 className='titleText' variants={titleAnim}>2 Month Client Project</motion.h4>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>Website created for start-up company in Belgium</motion.p>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          For our final group project in Wild Code School, we were tasked with creating a website for a start of in Belgium. The company, named Authxrs, was created to colaborate through writing with people from around the world that 'do not have a voice'. This was an amazing idea and we fell in love with the companies vision from the beginning. 
        </motion.p>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          We used many technologies through this project, including React, Styled Components, Framer Motion, Express, Stripe and many more. It was a challenging project in many ways but one of the toughest challenges we came accross was trying to understand exaclty what the client wanted in their website. This was also our first project created using a backend server. 
          This was challenging but we learned a lot from it. 
        </motion.p>
        </Hide>
        <Hide>
        <motion.button 
          className='titleText' variants={titleAnim}
          ><a href='https://the-authors.netlify.app/' target='blank'>View Website </a></motion.button>
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

export default AuthorsPage;