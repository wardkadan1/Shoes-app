import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shoes from "./components/Shoes";
import AddShoe from "./components/AddShoe";
import ShoeDetails from "./components/ShoeDetails";
import Login from "./components/Login";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [image, setImage] = useState(undefined);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shoes",
          element: (
            <Shoes
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              image={image}
              setImage={setImage}
            />
          ),
        },
        {
          path: "shoes/add",
          element: <AddShoe />,
        },
        {
          path: "shoes/:shoeId",
          element: <ShoeDetails />,
        },
        {
          path: "login",
          element: <Login setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
