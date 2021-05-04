import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion'
import useScroll from './useScroll';
import {scrollReveal} from '../animation'

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        About <span>Me</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="My Background">
          <div className="answer">
            <p>My Background is a little different compared to a typical Web Developer.</p>
            <p>
              I started off my career in Human Resources and worked in this area for 4 years. I then decided to follow my passion for technology which leaded me to join the Wild Code School and complete a 5 month Full Stack Web Development bootcamp specialising in Frontend Development with React. I have always had a great interest in technology and have dreamed of working in a role where I can express my creativity. I am highly motivated,persistent and eager to develop my skills further. 
            </p>
            <p>During my time working in HR, I have worked for some amazing companies like Irish Distillers (Jameson Whiskey), EY, eBay, Optum Technology, & Kimberly-Clark Australia</p>
          </div>
        </Toggle>
        <Toggle title="My Web Development Experience">
          <div className="answer">
            <p>Along with my experience, My Passion for Development grows everyday.</p>
            <p>
              I have gained a lot of valuable experiences from my time in the Wild Code School (WCS) bootcamp. Along with learning modern frameworks including React & Express, I also learned what it is like to work in a team as a developer. I have become profieciant in a number of important areas including agile methadology, git/github and working with a real client. 
            </p>
            <p>During and after the bootcamp I also completed the following courses:</p>
            <ul>
              <li>Intro to React v5 - Brian Holt</li>
              <li>Creative React & Redux - Simo Edwin</li>
              <li>Javacript for Beginners - Wes Bos</li>
              <li>Javascript v2 - Bianca Gandolfo</li>
              <li>CSS Grid - Wes Bos</li>
              <li>What is Flexbox</li>         
            </ul>
          </div>
        </Toggle>
        <Toggle title="Skills & Competencies">
          <div className="answer">
            <p>Below and some of my skills and competencies</p>
            <ul>
              <li>HTML  CSS</li>
              <li>Javascript</li>
              <li>Git / Github</li>
              <li>UX/UI Design</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Lightroom</li>
              <li>Presenting</li>         
            </ul>
          </div>
        </Toggle>
        <Toggle title="Hobbies & Interests">
          <div className="answer">
          <p>Below and some of activities that I love to do in my spare time</p>
            <ul>
              <li>Gym / Yoga</li>
              <li>Hiking / Droning</li>
              <li>Brazilian Jiu Jitsu</li>
              <li>Rugby</li>
              <li>Gaming</li>
              <li>NFL / American Football</li>
              <li>Technology</li>
              <li>Coding</li>  
              <li>Photoshop</li>       
            </ul>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  z-index:10;

  span {
    z-index:10;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    z-index:10;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  ul {
    padding-left:2rem
  }

  li {
    padding: 0.5rem;
  }
`;

export default FaqSection;
