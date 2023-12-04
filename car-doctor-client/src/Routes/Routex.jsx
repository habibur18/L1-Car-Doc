import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/LoginRegister/Login";
import Register from "../Page/LoginRegister/Register";
import BookService from "../Page/BookService/BookService";
import Bookings from "../Page/Bookings/Bookings";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";
import ServicesPath from "../Page/Services/ServicesPath";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <ServicesPath />,
      },
      {
        path: "book/:id",
        element: <BookService />,
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-hu6xdievy-randomhabibur.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
