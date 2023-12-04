import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block py-2 pl-3 pr-4 ${
        isActive ? "text-blue-700" : "text-gray-900"
      } rounded hover:bg-gray-100 md:hover:bg-transparent ${
        isActive ? "md:hover:text-blue-700" : "md:hover:text-gray-900"
      } md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
