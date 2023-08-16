import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

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
  }
];

export default AppRoutes;
