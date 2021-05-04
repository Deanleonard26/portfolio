import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faFile} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import cv from '../images/DeanLeonardFE.pdf';
import EmailForm from '../components/Email';
import Nav from '../components/Nav'

const ContactUs = () => {

  const FavStyle = {
    color: '#23d997',
    fontSize: '70px',
    margin: '2rem',
    marginLeft:'0',
    marginRight:'4rem'
  }

    return (
      <Wrapper>
      <Nav />
      <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
      <ContactWrapper>
        <Title>
        <ScrollTop />
          <Hide>
            <motion.h2 variants={titleAnim}>Contact <span>me</span></motion.h2>
          </Hide>
        </Title>
        
          <Hide>
            <Social variants={titleAnim}>
              <p>I am open to all development opportunities. Please contact me if you would like to speak further. </p>
             
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
            <a href = "mailto: deanleonard26@gmail.com" target='blank'>
            <FontAwesomeIcon className='icon' style={FavStyle} icon={faAt} />
            </a>
            <a href={cv} title="download">
            <FontAwesomeIcon className='icon'  style={FavStyle} icon={faFile} />
            </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
            <a href="https://linkedin.com/in/deanleonard1" target='blank'>
            <FontAwesomeIcon className='icon'  style={FavStyle} icon={faLinkedin} />
            </a>
            <a href="http://github.com/Deanleonard26" target='blank'>
            <FontAwesomeIcon className='icon'  style={FavStyle} icon={faGithub} />
            </a>
            </Social>
          </Hide>
          </ContactWrapper>
        <ContactFormWrapper>
        <EmailForm />
        </ContactFormWrapper>
      </ContactStyle>
      </Wrapper>
    );
  };

  const Wrapper = styled.div``

  const ContactStyle = styled(motion.div)`
    padding: 5rem 5rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    margin: 3rem 5rem;

    @media (max-width: 1500px) {
      padding: 1rem;
      font-size: 1rem;
      color:white;
    }

    @media (max-width: 500px) {
      margin:1rem 2rem;
      padding: 2rem 2rem 0rem 2rem;
    }
  `;
  
  const Title = styled.div`
    margin-bottom: 1rem;
    color: black;
    @media (max-width: 1500px) {
      margin-top: 1rem;
    }
  `;
  const Hide = styled.div`
    overflow: hidden;
    color:white;
  `;

 const Social = styled(motion.div)`
    display: flex;
    align-items: center;

    h2 {
      margin: 2rem;
    }

    p {
      width:80%;
    }

    @media(max-width:500px) {
    align-items:left;

    p{
      width: 100%;
    }
    }
  `;

  const ContactWrapper = styled.div `
  width:500px;

  
  @media(max-width:1200px) {
    margin-bottom: 80px;
  
  }

  @media(max-width:1000px) {
    justify-content:center;
    width:100%;
    align-items:center;
  
  }

  `

  const ContactFormWrapper = styled.div`
    @media(max-width:1000px) {
      display:flex;
      justify-content:left;
      text-align:left;
      width: 100%;
    }

    @media(max-width:500px) {
      display:flex;
      justify-content:center;
      text-align:left;
    }
  `
  
  export default ContactUs;