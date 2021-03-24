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
       display:block;
       padding: 2rem 1rem;
       text-align:center; 
       width:100%;
      }
`;
export const Description = styled.div`
  flex: 1;
  z-index:2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
    font-size:70px;
  }

  button {
    outline:none;

  }

  @media (max-width: 1300px) {
        padding:0;
        
        h2 {
          font-weight: lighter;
          font-size:40px;
        }

        button {
          margin: 2rem 0rem 5rem 0rem; 
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
