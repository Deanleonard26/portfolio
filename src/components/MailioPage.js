import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {titleAnim, pageAnimation} from '../animation'
import mailioMain from "../images/mailMain.png";

const MailioPage = () => {

  return (
    <StoryWrapper variants={pageAnimation}
    initial="hidden"
    animate="show">
      <ImgWrapper >
        <img src={mailioMain} alt='code cafe' /> 
      </ImgWrapper>
      <StorySection>
      <CloseButton>
        <Link to="/work">
              <h1>X</h1>
            </Link>
      </CloseButton>
         <motion.div exit='exit' variants={pageAnimation} initial="hidden" animate="show">
          <Hide>
        <motion.h2 className='titleText' variants={titleAnim}>Mailio</motion.h2>
          </Hide>
          <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.h4 className='titleText' variants={titleAnim}>48 Hour Hackathon</motion.h4>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>Hackathon facilitated by Twilio</motion.p>
        </Hide>
        <Hide>
        <motion.hr className='titleText' variants={titleAnim}></motion.hr>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          For our second Hackathon in Wild Code School, We were so lucky to work with the team at Twilio. 
          During this hackathon, our team of 6 people had to create an application that used a twilio whatsapp API. The requirements for the application was to create something that can be used by people in a disadvantaged situation. 
          We came up with the idea of creating a messaging app that would send incripted messaged from one party to another. The app would be used by people in refugee camps arund the world and would not require immediate internet access to send the messages.
        </motion.p>
        </Hide>
        <Hide>
        <motion.p className='titleText' variants={titleAnim}>
          When using this app, the user will first log in using their credentials. When they have created their message and input the recipients details they would get a QR code. This QR code would then be scanned by a camp leader who would be able to send the encripted message to the recipient. For the demo we created 3 users that you can see on the app. Jack was the refugee in the camp, Anna was the camp leader, and Lucy was the recipient of the encripted message
        </motion.p>
        </Hide>
        <Hide>
        <motion.button 
          className='titleText' variants={titleAnim}
          ><a href='https://vigilant-sammet-febf50.netlify.app/' target='blank'>View Mailio App</a></motion.button>
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

export default MailioPage;