import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
// import ErrorPage from "../../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
]);