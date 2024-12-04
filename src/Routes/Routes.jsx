import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Main/Error";
import Home from "../Pages/Home/Home";
import SingIn from "../Social/SingIn";
import SignUp from "../Social/signUp";
import ResetPass from "../components/ResetPass/ResetPass";
import AddVisa from "../Pages/AddVisa/AddVisa";

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
      {
        path: "/reset",
        element: <ResetPass />,
      },
      {
        path: "/addVisa",
        element: <AddVisa />,
      },
    ],
  },
]);

export default routes;
