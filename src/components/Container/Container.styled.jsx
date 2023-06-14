import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 16px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 32px;
  }
`;
