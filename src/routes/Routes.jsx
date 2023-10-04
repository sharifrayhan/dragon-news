import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage";
import About from "../pages/About";
import Career from "../pages/Career";
import Login from "../pages/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage></Rootpage>,
      errorElement: <Errorpage></Errorpage>,
        children: [
        {
            path: "/",
            element: <Home></Home>,
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
      }
        ],

    },
  ]);

 


export default router;
