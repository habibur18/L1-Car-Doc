import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
        location.reload();
      });
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200 p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-16" alt="Flowbite Logo" />
        </Link>
        <div>
          <div
            className="items-center hidden w-full md:flex w-auto"
            id="navbar-search"
          >
            <div className="relative md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex space-x-4 md:space-x-8">
              <li>
                <NavLink to="/" className="text-gray-700 hover:text-blue-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-700 hover:text-blue-500"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bookings"
                  className="text-gray-700 hover:text-blue-500"
                >
                  My Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center md:space-x-4">
          <button>
            {user ? (
              <div className="flex items-center space-x-3">
                <HashLink
                  smooth
                  to="/#services"
                  className="bg-orange-500 px-4 py-2 text-white rounded-md"
                >
                  APPOINTMENT
                </HashLink>
                <p
                  onClick={handleLogout}
                  className="text-gray-700 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700">
                Login
              </Link>
            )}
          </button>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
