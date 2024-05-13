import React, { ReactElement, ReactNode, lazy } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const menuData: MenuItem[] = [
  getItem("快速入门", "start", <PieChartOutlined />,[
    getItem("教程：井字棋", "/game", )
  ]),
  getItem("描述UI", "describe", <DesktopOutlined />,[
    getItem("安装-使用TypeScript", "/ts-useContext", )
  ]),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3", <UserOutlined />, [getItem("Tom 1", "6")]),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export interface RouteType {
  index?:any
  path?: string
  //TODO:element类型判断
  element: React.LazyExoticComponent<(props:any) => any>;
  children?: RouteType[]
  text?: string
  icon?: string
}

const routeData: RouteType[] = [
  {
    path: '/',
    element: lazy(()=>import("@/pages/Layout")),
    children: [
      {
        path: '/game',
        element: lazy(() => import("@/pages/Game")),
        text:"教程：井字棋",
      },
      {
        path: '/ts-useContext',
        element: lazy(() => import("@/pages/TSUseContext")),
        text:"安装-使用TypeScript"
      }
    ]
  }
]

export default routeData
export { menuData }
