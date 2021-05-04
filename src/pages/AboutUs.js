import React from 'react';
import AboutSection from '../components/AboutSection'
import ServicesSection from  '../components/ServicesSection'
import FAQSection from '../components/FAQSection';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop'
import styled from 'styled-components';

const AboutUs = () => {
    return (
        <motion.div exit='exit' variants={pageAnimation} initial="hidden" animate="show">
           <Wrapper>
                
                <AboutSection />
                <ServicesSection />
                <FAQSection />
                <ScrollTop />
            </Wrapper>
          </motion.div>

    )
}

const Wrapper = styled.div`
    overflow-x:hidden;
`

export default AboutUs;