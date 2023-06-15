import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const CardsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  row-gap: 30px;
  column-gap: 38px;
  list-style: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 50px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  line-height: 1.5;
  color: #5736a3;
`;

export const NoFilterText = styled.h3`
  text-align: center;
  font-size: 24px;
  line-height: 1.5;
  color: #5736a3;
`;

export const BackButtons = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 196px;
  height: 50px;
  padding-top: 5px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  background-color: #5736a3;
  color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ebd8ff;
    color: #5736a3;
    border: 2px solid #d8a331;
  }
`;

export const LoadMoreButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 196px;
  height: 50px;
  padding-top: 5px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  background-color: #5736a3;
  color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ebd8ff;
    color: #5736a3;
    border: 2px solid #d8a331;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 196px;
  height: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  background-color: #5736a3;
  color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
`;

export const StyledSelect = styled.select`
  padding-left: 5px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  background-color: #ebd8ff;
  color: #5736a3;
  border-radius: 10px;
  outline: none;
`;
