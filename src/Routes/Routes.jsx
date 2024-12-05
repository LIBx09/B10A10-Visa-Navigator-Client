import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Main/Error";
import Home from "../Pages/Home/Home";
import SingIn from "../Social/SingIn";
import SignUp from "../Social/signUp";
import ResetPass from "../components/ResetPass/ResetPass";
import AddVisa from "../Pages/AddVisa/AddVisa";
import Visa from "../Pages/Visa/Visa";
import VisaDetails from "../Pages/VisaDetails/VisaDetails";
import MyVisas from "../Pages/MyVisas/MyVisas";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/visa/limit"),
      },
      {
        path: "/visa",
        element: <Visa />,
        loader: () => fetch("http://localhost:5000/visa"),
      },
      {
        path: "/details/:id",
        element: <VisaDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visa/${params.id}`),
      },
      {
        path: "myVisa",
        element: <MyVisas />,
        loader: () => fetch("http://localhost:5000/visa"),
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
