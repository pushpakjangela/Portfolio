import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import About from "../Pages/AboutPage/About";
import Home from "../Pages/HomePage/Home";
import MainPage from "../Pages/MainPage/MainPage";

const routes = [
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorComponent />, 
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorComponent />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorComponent />, 
    },

  ];
export default routes;