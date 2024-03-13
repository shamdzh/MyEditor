import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Layout, Menu, Space } from "antd";
import React from "react";
import styled from "styled-components";

export const EditorSidebar = () => {
  const data = [
    { key: "1", label: "Первая заметка" },
    { key: "2", label: "Список дел" },
    { key: "3", label: "О редкаторе" },
  ];

  return (
    <Sidebar width={300}>
      <Container>
        <Space direction="horizontal">
          <Avatar
            size={28}
            shape="circle"
            icon={<UserOutlined />}
            style={{ background: "#cecece" }}
          />

          <Username color="#fff">Shamil' Dzhankhotov</Username>
        </Space>

        <Divider
          type="horizontal"
          style={{ borderColor: "#ccc", margin: "2px 0" }}
        />

        <Menu items={data} />
      </Container>
    </Sidebar>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 12px;
  gap: 8px;
`;

const Sidebar = styled(Layout.Sider)`
  background-color: #161617 !important;
`;

const Username = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

const List = styled.ul``;

const ListItem = styled.li``;
