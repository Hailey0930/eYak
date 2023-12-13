import { styled } from "styled-components";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";
import { breakPoints } from "./breakPoints";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
  margin-top: 30px;

  @media screen and (max-width: ${breakPoints.small}px) {
    gap: 0;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 32px;
  height: 32px;
  padding: 8px;
  margin: 0;
  background-color: transparent;
  border: none;
  color: black;
  font-size: var(--font-size-500);
  border-radius: 4px;
  cursor: pointer;

  &[disabled] {
    color: #bdbdbd;
    background-color: transparent;
    border: none;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background-color: var(--primary-blue-color);
    color: #fff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }

  @media screen and (max-width: ${breakPoints.medium}px) {
    min-width: 28px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    padding: 0px;
    font-size: var(--font-size-600);
  }
`;

export const FirstIcon = styled(FiChevronsLeft)`
  font-size: var(--font-size-500);
`;

export const PrevIcon = styled(FiChevronLeft)`
  font-size: var(--font-size-500);
`;

export const NextIcon = styled(FiChevronRight)`
  font-size: var(--font-size-500);
`;

export const LastIcon = styled(FiChevronsRight)`
  font-size: var(--font-size-500);
`;
