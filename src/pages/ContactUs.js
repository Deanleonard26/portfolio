import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'

export default function ContactUs() {
    return (
        <motion.div 
            exit='exit' 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style= {{background: "#fff"}}
        >
            <h1>Contact Us Page</h1>
        </motion.div>
    )
}
