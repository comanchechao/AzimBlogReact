import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./views/blogs";
import { Provider } from "react-redux";
import "./assets/index.css";
import store from "./Store/orders";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Blog from "./views/blog";
import CreateBlog from "./views/newBLog";
import NewBlog from "./views/createNewBlog";
import EditBlog from "./views/editBlog";

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
  {
    path: "/blogs/:id",
    element: <Blog />,
  },
  { path: "/create", element: <CreateBlog /> },
  { path: "/edit/:id", element: <EditBlog /> },
  { path: "/create/newblog", element: <NewBlog /> },
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
