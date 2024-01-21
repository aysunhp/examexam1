import Root from "../pages/root";
import Home from "../pages/home";
import Add from "../pages/add";
import Detail from "../pages/detail";
import Basket from "../pages/basket";
import Wishlist from "../pages/wishlist";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];

export default routes;
