import styled from "styled-components";
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
       padding: 1rem 3rem;
       width:100%;
      }
`;
export const Description = styled.div`
  flex: 1;
  z-index:2;
  padding-right: 5rem;
  margin-bottom:2rem;
  h2 {
    font-weight: lighter;
    font-size:75px;
  }

  button {
    outline:none;
    width:150px;

  }
  
  .portfolio-info {
    p {
      width: 60%;
    }
    
    button {
      height:50px;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      margin: 2rem 0rem 5rem 0rem; 
      text-decoration: none;
      
    }
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between

    
  }

      @media (max-width: 1300px) {
        padding:0;
        
        /* h2 {
          font-weight: lighter;
          font-size:40px;
        } */

        button {
          margin: 2rem 0rem 0rem 0rem; 
        }
      }

      @media (max-width: 835px) {
        h2 {font-size: 50px;
        }
      }

      @media (max-width: 800px) {
          .portfolio-info {
          p {
            font-size:13px;
        }
          button {
          align-items:center;
          width: 100px;
        }
      }
      }

      @media (max-width: 450px) {
      
          .portfolio-info {
          p {
            font-size:10px;
        }
          button {
          align-items:center;
          width: 90px;
        }
      }
      }

  
`;
export const Image = styled.div`
  flex: 1;
  z-index:2;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
