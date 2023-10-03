import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage";
import About from "../pages/About";
import Career from "../pages/Career";


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
        ],

    },
  ]);

 


export default router;
