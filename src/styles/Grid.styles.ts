import styled from "styled-components";
import { breakPoints } from "./breakPoints";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 10px 0;
  border-radius: 10px;
  border: 1px solid var(--white-color-400);
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid red;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  padding: 2%;
  gap: 10px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    gap: 20px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    gap: 10px;
  }
`;

export const MedicineName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: var(--font-size-200);
  font-weight: 800;
  color: var(--secondary-blue-color);
  margin-bottom: 20px;
`;

export const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  white-space: break-spaces;
  gap: 2%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Detail = styled.div`
  font-size: var(--font-size-500);
  width: 72%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 90%;
  }

  &.title {
    display: flex;
    justify-content: center;
    font-size: var(--font-size-400);
    font-weight: 600;
    width: 27%;

    @media screen and (max-width: ${breakPoints.medium}px) {
      width: 90%;
      justify-content: flex-start;
    }

    @media screen and (max-width: ${breakPoints.small}px) {
      font-size: var(--font-size-500);
      width: 20%;
      justify-content: center;
    }
  }
`;
