import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Main/Error";
import Home from "../Pages/Home/Home";
import SingIn from "../Social/SingIn";
import SignUp from "../Social/signUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SingIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
