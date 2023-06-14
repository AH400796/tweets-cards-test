import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  text-decoration: none;
  color: #ebd8ff;
  font-weight: 600;

  &.active {
    color: #d8a331;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #d8a331;
  }
`;
