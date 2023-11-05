import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Products, Detail, Cart, Login, Category } from "@pages";
import { Flowbite } from "flowbite-react";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Wrapper } from "@components/template";

export const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Detail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/category/:nama",
    element: <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Flowbite>
        <Wrapper>
          <RouterProvider router={Router} />
        </Wrapper>
      </Flowbite>
    </Provider>
  </React.StrictMode>,
);
