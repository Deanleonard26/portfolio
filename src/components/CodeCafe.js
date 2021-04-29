import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/codeCafe6.png";
import cafe4 from "../images/codeCafe7.png";
import cafe5 from "../images/codeCafe8.png";

const CodeCafe = () => {
  
    useEffect(() => {
    Aos.init({ duration: 2000 });
    }, []);

  return (
    <StoryWrapper>
      <Banner>
        <img src={cafe1} alt="banner" />
      </Banner>
      <StorySection1>
        <StorySection1Text>
          <h2>Code Cafe</h2>
          <h3>First Wild Code School Project</h3>
          <p>
            Code Cafe was our first group project in Wild Code school that lasted 2 weeks. During this time we created a code cafe website using HTML & CSS    
          </p>
          <a href='https://codingcafe.netlify.app/' target='blank'>
          <button>Website</button>
          </a>
        </StorySection1Text>
        <StorySection1Img>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={cafe2}
            alt="temp"
          />
        </StorySection1Img>
      </StorySection1>
      <StorySection2>
      </StorySection2>
      <StorySectionMiddle data-aos="fade-up" data-aos-duration="3500">
        <p>
         My main responsibility for this project was wireframing, design and creating the landing page and about us section. 
         This was a great introductary project and I learned a lot about layout and responsiveness of a webpage. 
         When researching how we wanted the design of the page to look, we explored different color themes and finally settled on 
         the color that is currently on the page. We wanted to introduce a modern yet quirky look to the page.
        </p>
      </StorySectionMiddle> 
      <StorySection3 data-aos="fade-up" data-aos-duration="3500">
        <img src={cafe3} alt='code cafe' />
        <img src={cafe5} alt='code cafe' />
      </StorySection3>
      <StorySectionMiddle data-aos="fade-up" data-aos-duration="3500">
        <p>
         The main challenge during this project was trying to avoid conflict when working in a team of four. We experienced conflict in our shared files along with pushing and pulling from our teams github repo
        </p>
      </StorySectionMiddle> 
       <StorySection4 data-aos="fade-up" data-aos-duration="3500">
        <img src={cafe3} alt='code cafe' />
      </StorySection4>
    </StoryWrapper>
  );
};

// SECTION 1

const Banner = styled.div`
margin: 50px 0 100px 0 ;

  img {
    width:80vw;
    height: auto;
  }

  @media (max-width: 500px) {
    margin-bottom: 80px;
  }
`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items:center;
  margin: 0;
  padding: 0;
`;

const StorySection1 = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-direction: row;
  text-align:center;
  flex-wrap: wrap;
  margin: 50px 0;
`;

const StorySection1Img = styled.div`
  width: 60%;

  img {
    width: 100%;
    margin:0;
    padding:0;
    height: auto;
  }
`

const StorySection1Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align:left;
  width: 40%;

  h2 {
    font-size: 30px;
    color:white;
    margin-bottom:10px;
  }

  p {
    width: 80%;
    font-size: 16px;
    line-height: 2em;
    margin-top: 12px;
  }
  button {
    width: 40%;
    text-decoration:none;
    outline:none;
  }
`;

// SECTION 2

const StorySection2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align: center;
  align-items: center;
  margin-bottom: 100px;

  h1 {
    margin-top: 100px;
  }

  @media (max-width: 500px) {
    h1 {
      width: 80%;
      font-size: 30px;
    }
  }
`;

const StorySection2Img = styled.div`
  img {
    width: 60%;
    height:auto;
  }
`;

// MIDDLE STORY SECTION

const StorySectionMiddle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items:center;
  width: 100%;
  margin-bottom: 100px;

  p {
    color:white;
    width:50%;
    font-size: 16px;
    line-height: 2em;
    margin-top: 12px;
  }

  @media (max-width: 1100px) {
    p {
      width: 60%;
      margin: 10px;
      line-height: 2em;
    margin: 0 100px;
    margin-bottom: 10px;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
    p {
      width: 80%;
      font-size: 13px;
    }
  }
`;

// SECTION 3

const StorySection3 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items:center;
  margin-bottom: 100px;
  margin-top: 50px;

  img {
    width: 550px;
    margin: 0 10px;
    height: 350px;
    object-fit: cover;
  }
`;

const StorySection4 = styled.div`
margin-top: 100px; 

img {
    width: 70%;
    margin: 0 10px;
    height:auto;
    object-fit: cover;
    margin-bottom:200px;
  }`

export default CodeCafe;