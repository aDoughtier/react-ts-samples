import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { menuData } from "@/router/router.config";
import "./index.scss";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const navigate  = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuItemClick: MenuProps["onClick"] = (e) => {
    // console.log(e);
    navigate(e.key)
  };

  return (
    <div className="zx-layout">
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            // defaultSelectedKeys={["1"]}
            mode="inline"
            items={menuData}
            onClick={handleMenuItemClick}
          />
        </Sider>
        <Layout>
          {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
          <Content>
            <Breadcrumb>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="zx-main-container">
              <Outlet />
              <div style={{height:2000}}>333</div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            react-ts-samples ©{new Date().getFullYear()} Created by ZX
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
