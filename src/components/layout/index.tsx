import { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";

type ILayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: ILayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
