import { styled } from "styled-components";
import SpinnerImg from "../assets/images/spinner.gif";

export default function Loading() {
  return (
    <Spinner>
      <SpinnerImage src={SpinnerImg} />
    </Spinner>
  );
}

const Spinner = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -30%);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 25%;
  z-index: 10;
`;

const SpinnerImage = styled.img`
  width: 100%;
  height: 100%;
`;
