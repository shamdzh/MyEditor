import React from "react";
import { EditorV2 } from "../../components/EditorV2";
import { Layout } from "antd";
import styled from "styled-components";
import { EditorSidebar } from "./ui/EditorSidebar";

export const MainPage: React.FC = () => {
  return (
    <>
      <StyledLayout>
        <EditorSidebar />
        <Content>
          <EditorV2 />
        </Content>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const Content = styled(Layout.Content)`
  padding: 40px;
  background-color: #fff !important;
`;
