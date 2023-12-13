import styled from "styled-components";
import { breakPoints } from "./breakPoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 80px;
  padding: 10px 5%;
  border-bottom: 1px solid var(--white-color-400);

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 86%;
    padding: 10px 7%;
  }
`;

export const Logo = styled.button`
  height: 60px;
  font-family: KCC-Ganpan;
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--primary-blue-color);
  cursor: pointer;

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: 4rem;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: 3.5rem;
  }
`;
