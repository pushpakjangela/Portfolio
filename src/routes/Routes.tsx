import { RouteObject } from "react-router-dom";
import About from "../Pages/AboutPage/About";
import Home from "../Pages/HomePage/Home";
import LayoutWrapper from "../Wrappers/LayoutWrapper/LayoutWrapper";
import MainPage from "../Pages/MainPage/MainPage";

const routes:RouteObject[] = [
      {
        path: '/',
        element: <LayoutWrapper />,
        children: [
          { path: '', element: <MainPage /> },
          { path: 'about', element: <About /> },
          { path: "home", element: <Home /> },
        ],
      },
  ];
export default routes;