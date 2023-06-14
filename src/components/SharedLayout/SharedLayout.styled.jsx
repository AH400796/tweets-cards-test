import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const Main = styled.main`
  flex: 1 0 auto;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 0;
  }
`;
