import React from "react";
import home1 from "../images/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>DEAN</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>LEONARD</span> 
            </motion.h2>
          </Hide>
         
        </motion.div>
        <motion.p variants={fade}>
         Frontend Developer
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
