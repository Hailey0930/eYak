import styled from "styled-components";
import { breakPoints } from "./breakPoints";
import { LuSearch } from "react-icons/lu";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 50px 5%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 90%;
    padding: 50px 5%;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  height: 40px;
  border-radius: 15px;
  border: 1px solid var(--primary-blue-color);
  margin-bottom: 30px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 70%;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 92%;
  height: 36px;
  padding: 0 10px;
  border-radius: 15px;
  border: none;
  font-size: var(--font-size-400);

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(LuSearch)`
  position: absolute;
  right: 10px;
  bottom: 3px;
  width: 30px;
  height: 30px;
  color: var(--secondary-blue-color);
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 30px;
  row-gap: 20px;
  width: 100%;

  @media screen and (max-width: ${breakPoints.largeMedium}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${breakPoints.medium}px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
