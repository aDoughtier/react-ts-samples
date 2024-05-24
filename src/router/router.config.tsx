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
  getItem("状态管理", "describe", <DesktopOutlined />,[
    getItem("使用 useState", "/status-use-state", ),
    getItem("使用 Context", "/status-useContext", ),
    getItem("结合reducer 和 context ", "/status-context-reducer", )
  ]),
  getItem("逃生窗口", "escape", <UserOutlined />, [
    getItem("使用 useRef", "/EscapeUseRef", )
  ]),
  getItem("Hooks", "hooks", <TeamOutlined />, [
    getItem("useState", "/hooks-useState" ),
    getItem("useRef", "/hooks-useRef" ),
    getItem("useEffect", "/hooks-useEffect" ),
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
        path: '/status-use-state',
        element: lazy(() => import("@/pages/StatusUseState")),
        text:"使用 useState"
      },
      {
        path: '/status-useContext',
        element: lazy(() => import("@/pages/StatusContext")),
        text:"使用 Context"
      },
      {
        path: '/status-context-reducer',
        element: lazy(() => import("@/pages/StatusReducerContext")),
        text:"Reducer Context"
      },
      {
        path: '/EscapeUseRef',
        element: lazy(() => import("@/pages/EscapeUseRef")),
        text:"EscapeUseRef"
      },
      {
        path: '/hooks-useState',
        element: lazy(() => import("@/pages//hooks/UseState")),
        text:"hooks-useState"
      },
      {
        path: '/hooks-useRef',
        element: lazy(() => import("@/pages//hooks/UseRef")),
        text:"hooks-useRef"
      },

    ]
  }
]

export default routeData
export { menuData }
