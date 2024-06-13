import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Users from "../pages/Users/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
