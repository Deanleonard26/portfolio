import React from "react";
import { About, Description, Hide } from "../styles";
// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade} from '../animation'
import Wave from './Wave';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner'

const AboutSection = () => {
  return (
    <About>
    <Banner />
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 className='titleText' variants={titleAnim}>Hi,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 className='titleText' variants={titleAnim}>
              I'm <span>Dean,</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 className='titleText' variants={titleAnim}>
            A <span>Web </span> Developer
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p  variants={fade}>
         Frontend Developer / Design Enthusiast
        </motion.p>
        <Link to='/contact'>
        <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
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
