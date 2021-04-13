import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";


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
        </StorySection1Text>
        
      </StorySection1>
      <StorySection2>
        <StorySection2Img>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={cafe2}
            alt="temp"
          />
        </StorySection2Img>
      </StorySection2>
      <StorySectionMiddle data-aos="fade-up" data-aos-duration="3500">
        <p>
         My main responsibility for this project was wireframing, design and creating the landing page and about us section.
        </p>
      </StorySectionMiddle>
      
      
     
      <StorySection3>
        
      </StorySection3>
    </StoryWrapper>
  );
};

// SECTION 1

const Banner = styled.div`
margin-bottom: 100px;

  img {
    width:60vw;
    min-width: 60%;
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
  margin: 0;
  padding: 0;
`;

const StorySection1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align:center;
  align-items:center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const StorySection1Text = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align:center;
  align-items:center;
  margin: 20px;
  height: auto;
  text-align: left;

  h2 {
    font-size: 30px;
    color:white;
    margin-bottom:10px;
  }

  p {
    width:50%;
    text-align:center;
    font-size: 16px;
    line-height: 2em;
    margin-top: 12px;
  }


`;

const StorySection1Img = styled.div`
  img {
    width: 60%;
    height: auto;
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
  margin-top: 100px;
`;

const StorySection3Text = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  text-align: center;
  align-items: center;
  height: auto;

  img {
    margin-bottom: 100px;
  }

  h2 {
    font-size: 25px;
  }

  p {
    width:50%;
    font-size: 16px;
    line-height: 2em;
    margin-top: 12px;
  }

  @media (max-width: 1100px) {

  }

  @media (max-width: 500px) {
    p {
      margin-top: 50px;
      font-size: 13px;
    }
  }
`;

const StorySection3Img = styled.div`
  margin-bottom: 0px;
  img {
    width: 65%;
    height:auto;
  }

  @media (max-width: 500px) {
    img {
      width: 90%;
    }
  }
`;

export default CodeCafe;