import styled, { keyframes } from "styled-components";

const expandAnimation = keyframes`
  0% {
    transform: scale(0);
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;
export const Body = styled.div`
  background-color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Background = styled.div`
  position: relative;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  @media (max-width: 768px) {
    height: 300px;

  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    z-index: -1;
    animation: initialBackground 0s 3s forwards;
  }

  @keyframes initialBackground {
    to {
      opacity: 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${(props) => props.headerImage}); // Use the prop value
    background-size: cover;
    background-position: center;
    z-index: -2;
    animation-delay: 10s;
    animation: ${fadeIn} 30s ease 0s 1 normal forwards;
  }

  animation: ${expandAnimation} 3s ease 0s 1 normal forwards;
`;
export const Heading = styled.h1`
  font-size: 60px;
  filter: brightness(100%);

  @media (max-width: 768px) {
    margin-top:20px;
  font-size:20px;

  }


`;

export const SubHeading = styled.h3`
  color: white;
`;
export const HeaderButton = styled.button`
  position: relative;
  width: 319px;
  height: 54px;
  border-radius: 50px;
  color: black;
  background-color: #87CEEB;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s; /* Add transition for smooth animation */
  opacity: 1; /* Initially set opacity to 1 */

  &:hover {
    background-color: #6EA4C9;
    opacity: 0.8; /* Set the desired opacity on hover */
  }

  @media (max-width: 768px) {
    width: 40%; /* Full width on smaller screens */
    height: 50px; /* Adjusted height for smaller screens */
    font-size: 16px; /* Adjusted font size for smaller screens */
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 15px; /* Adjust this value to control the arrow's position */
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid #000;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s; /* Add transition for smooth animation */
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(-50%) rotateX(180deg); /* Rotate the arrow to point downward */
  }
`;
export const AboutSection = styled.div`
  background-color: #111111;
  height: 400px;


  @media (max-width: 768px) {
    height: 800px;

   

  }
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Reverse the order on mobile screens */
    align-items: center; /* Center items on mobile screens */
  }
`;

export const SectionHeading = styled.h1`
  color: white;
  text-align: center;
`;



export const AnimatedParagraph = styled.p`
  color: white;
  font-size: 16px;
  max-width: 1400px; /* Use max-width for responsiveness */
  margin-top: 25px;
  margin-left: 30px;
 opacity: 0;
  transform: scale(0.8);
  transition: opacity 1s ease-in-out, transform 5s ease-in-out; 

  &.scale-up {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 10px;
    max-width: 240px; /* Adjusted max-width for smaller screens */
  }
`;



export const AnimatedProfilePic = styled.img`
 border-radius: 20px;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 30px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1s ease-in-out, transform 5s ease-in-out;
  &.scale-up {
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 20px auto 0 auto; 
    display: block;
    position: relative;
  }
`;
