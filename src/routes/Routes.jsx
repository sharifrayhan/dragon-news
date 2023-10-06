import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    loader: () => fetch(`/news_data.json`),
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/news_data.json`),
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Career",
        element: <Career></Career>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch(`/news_data.json`),
      }
    ],
  },
]);

export default router;
