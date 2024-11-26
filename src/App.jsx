import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import Shoes from "./components/shoes/Shoes";
import AddShoe from "./components/addshoe/AddShoe";
import ShoeDetails from "./components/shoedetails/ShoeDetails";
import Login from "./components/login/Login";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [image, setImage] = useState(undefined);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shoes",
          element: <Shoes user={user} />,
        },
        {
          path: "shoes/add",
          element: (
            <AddShoe
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
          path: "shoes/:shoeId",
          element: (
            <ShoeDetails
              user={user}
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
          path: "login",
          element: <Login setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
