import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faFile} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import cv from '../images/DeanLeonard.pdf'

const ContactUs = () => {

  const FavStyle = {
    color: '#23d997',
    fontSize: '70px',
    margin: '2rem'
  }

    return (
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
            <FontAwesomeIcon style={FavStyle} icon={faAt} />
            </a>
            <a href={cv} title="download">
            <FontAwesomeIcon style={FavStyle} icon={faFile} />
            </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
            <a href="https://linkedin.com/in/deanleonard1" target='blank'>
            <FontAwesomeIcon style={FavStyle} icon={faLinkedin} />
            </a>
            <a href="http://github.com/Deanleonard26" target='blank'>
            <FontAwesomeIcon style={FavStyle} icon={faGithub} />
            </a>

             
            </Social>
          </Hide>
          </ContactWrapper>
        <MapWrapper>
        <iframe title='map' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38433.641312215295!2d-6.077855057978327!3d52.982556555769555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867b0b5d9502859%3A0x284e79fbf541a3e7!2sWicklow!5e0!3m2!1sen!2sie!4v1616688732715!5m2!1sen!2sie" ></iframe>
        </MapWrapper>
      </ContactStyle>
    );
  };

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
  `;
  
  const Title = styled.div`
    margin-bottom: 1rem;
    color: black;
    @media (max-width: 1500px) {
      margin-top: 2rem;
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

  `

  const MapWrapper = styled.div`

      iframe {
        width: 500px;
        height: 500px;
        border-radius:5px;
        border:0;
      }

    @media(max-width:500px) {
    
      iframe {
        width: 320px;
        height: 500px;
        margin-bottom: 100px
      }

    }
  `
  
  export default ContactUs;