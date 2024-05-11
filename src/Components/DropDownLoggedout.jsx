import React from "react";
import {Link } from "react-router-dom";

const DropDownLoggedout = () => {
  return (
    <div className="select-none absolute top-11 right-0 z-10 w-40 bg-white dark:bg-gray-700">
      <ul>
        <li>
          <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >All Ebooks</Link>
        </li>
        <li>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">login</Link>
        </li>
        <li>
          <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownLoggedout;
