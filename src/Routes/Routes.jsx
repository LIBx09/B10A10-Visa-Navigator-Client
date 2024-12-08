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
import PrivateRoutes from "./PrivateRoutes";
import UpdateModal from "../components/UpdateModal/UpdateModal";
import AppliedVisa from "../Pages/AppliedVisa/AppliedVisa";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://visa-navigator-server-dun.vercel.app/visa/limit"),
      },
      {
        path: "/visa",
        element: <Visa />,
        loader: () =>
          fetch("https://visa-navigator-server-dun.vercel.app/visa"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <VisaDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-dun.vercel.app/visa/${params.id}`
          ),
      },
      {
        path: "myVisa",
        element: (
          <PrivateRoutes>
            <MyVisas />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://visa-navigator-server-dun.vercel.app/visa"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateModal />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://visa-navigator-server-dun.vercel.app/visa/${params.id}`
          ),
      },
      {
        path: "/applied",
        element: (
          <PrivateRoutes>
            <AppliedVisa />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://visa-navigator-server-dun.vercel.app/applied"),
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
        element: (
          <PrivateRoutes>
            <AddVisa />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
