import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shoes from "./components/Shoes";
import AddShoe from "./components/AddShoe";
import ShoeDetails from "./components/ShoeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shoes",
        element: <Shoes />,
      },
      {
        path: "shoes/add",
        element: <AddShoe />,
      },
      {
        path: "shoes/:shoeId",
        element: <ShoeDetails />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
