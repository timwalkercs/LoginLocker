import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
  {
    path: '/sign-in',
    element: <SignIn />
    },
  {
    path: '/sign-up',
    element: <SignUp />
  }
];

export default AppRoutes;
