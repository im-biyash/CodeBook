import React, { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import Search from './Search';
import DropDownLoggedout from './DropDownLoggedout';
import DropDownLoggedIn from './DropDownLoggedin';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem('token'));
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const cartlength = cart.length;

  const Opencart = () => {
    navigate('/cart');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codebook</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-xl">
            <IoSettingsOutline className="text-black dark:text-white" onClick={() => setdarkMode(!darkMode)} />
            <IoMdSearch className="text-black dark:text-white" onClick={() => setShowSearch(!showSearch)} />
            <div className="relative">
              <FaCartArrowDown onClick={Opencart} className="text-black dark:text-white" />
              {cartlength ? (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-400 text-white rounded-full px-2 text-xs">
                  {cartlength}
                </span>
              ) : (
                ""
              )}
            </div>
            <MdAccountBox className="text-black dark:text-white" onClick={() => setDropdown(!dropdown)} />
            {dropdown && (token ? <DropDownLoggedIn setDropdown={setDropdown} /> : <DropDownLoggedout setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>
      {showSearch && <Search />}
    </>
  );
};

export default Header;
