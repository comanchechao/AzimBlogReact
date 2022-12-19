import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./views/blogs";
import { Provider } from "react-redux";
import './assets/index.css'
import store from "./Store/orders";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ffbd00",
      // ...
      900: "#ffbd00",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
