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
  column-count: 4;
  column-gap: 30px;
  width: 100%;
  min-height: 500px;

  @media screen and (max-width: ${breakPoints.largeMedium}px) {
    column-count: 3;
  }

  @media screen and (max-width: ${breakPoints.medium}px) {
    column-count: 2;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    column-count: 1;
  }
`;
