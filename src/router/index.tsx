import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Spin } from "antd";
import routeData, { RouteType } from "./router.config";

const formatRouter = (arr: RouteType[]) => {
  let routes: RouteObject[] = [];
  arr.forEach((item) => {
    const newRoute = {
      ...item,
      element: (
        <Suspense fallback={<Spin />}>
          <item.element />
        </Suspense>
      ),
      children: item.children ? formatRouter(item.children) : [],
    };
    //通过Suspense 组件，将lazy懒加载的组件转换成JSX.Element :https://cloud.tencent.com/developer/article/2098078
    routes.push(newRoute);
  });
  return routes;
};

const router = createBrowserRouter(formatRouter(routeData));

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
