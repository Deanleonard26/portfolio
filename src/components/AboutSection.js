import React from "react";
import { About, Description, Hide } from "../styles";
// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade} from '../animation'
import Wave from './Wave'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Dean,</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
            A <span>Web </span> Developer
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
         Frontend Developer / Design Enthusiast
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      {/* <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image> */}
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
