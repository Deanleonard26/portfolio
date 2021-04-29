import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import temp1 from "../images/temp1.png";
import temp2 from "../images/temp2.png";
import temp3 from "../images/temp3.png";
import temp4 from "../images/temp4.png";

const TempEra = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
    }, []);

  return (
    <StoryWrapper>
      <Banner>
        <img src={temp1} alt="banner" />
      </Banner>
      <StorySection1>
        <StorySection1Text>
          <h2>TempEra</h2>
          <h3>First Wild Code School Hackathon</h3>
          <p>
          Temp Era was creating in 24 hours in my first hackathon in Wild Code School. Our task was to create an application that would be transported back in time. We chose to create a colorizing application that colorized black and white photos in the Victorian Era. The play on words Temp for temporary and Era also brings a Steampunk look to the application.             
          </p>
        </StorySection1Text>
        <StorySection1Img>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={temp2}
            alt="temp"
          />
        </StorySection1Img>
      </StorySection1>
      <StorySection2>
      </StorySection2>
      <StorySectionMiddle data-aos="fade-up" data-aos-duration="3500">
        <p>
        The user is first greeted with instructions on how to use the application. From there the user can click start to be brought to the image capture screen.        </p>
      </StorySectionMiddle> 
      <StorySection3 data-aos="fade-up" data-aos-duration="3500">
        <img src={temp3} alt='code cafe' />
        <img src={temp4} alt='code cafe' />
      </StorySection3>
      <StorySectionMiddle data-aos="fade-up" data-aos-duration="3500">
        <p>
         Once the user has taken a picture they can then click colorize which will change the picture from black and white to colour. To Create this illusion, we used a simple javascript that greyscaled an image, then on click, the image would go back to its original colour.

        </p>
      </StorySectionMiddle> 
       <StorySection4 data-aos="fade-up" data-aos-duration="3500">
        <img src={temp3} alt='code cafe' />
      </StorySection4>
    </StoryWrapper>
  );
};

// SECTION 1

const Banner = styled.div`
margin: 50px 0 100px 0 ;

  img {
    width:80vw;
    height: 700px;
    object-fit:cover;
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
    height: 420px;
    object-fit:cover;
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
    margin: 0 20px;
    height: 800px;
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

export default TempEra;