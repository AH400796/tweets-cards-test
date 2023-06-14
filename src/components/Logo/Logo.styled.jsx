import styled, { keyframes } from 'styled-components';

const animation = keyframes`
0% {    
    transform: rotateY(0);
  }
50% {
    transform: rotateY(180deg);
  }
100% {
    transform: rotateY(0);
  }
`;

export const LogoWrapper = styled.div`
  border-radius: 50%;
  padding: 10px;

  border: 5px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06);

  /* animation-name: ${animation}; */
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;

export const LogoImage = styled.img`
  width: 120px;
`;
