import React, { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import Search from './Search';
import DropDownLoggedout from './DropDownLoggedout';

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const[dropdown,setDropdown] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-white  border-gray-200 dark:bg-gray-900 dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-xl">
            <IoSettingsOutline className='text-black dark:text-white' onClick={() => setdarkMode(!darkMode)} />
            <IoMdSearch className='text-black dark:text-white' onClick={() => setShowSearch(!showSearch)} />
            <FaCartArrowDown className='text-black dark:text-white' />
            <MdAccountBox className='text-black dark:text-white' onClick={(() => setDropdown(!dropdown))} />
            {dropdown && <DropDownLoggedout/>}
          </div>
        </div>
      </nav>
      {showSearch && <Search />}

    </>
  )
}

export default Header;
