import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DropDownLoggedin = ({ setDropdown }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the session storage if needed
    sessionStorage.removeItem('email');
    navigate('/login');
    setDropdown(false);
  };

  useEffect(() => {
    const userEmail = sessionStorage.getItem('email');
    console.log("Retrieved email from session storage:", userEmail); // This should log the email
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  return (
    <div id="dropdown" className="select-none absolute top-11 right-0 z-10 w-43 bg-gray-300 dark:bg-slate-800">
      <div>
        <p className='text-white'>{email}</p>
      </div>
      <ul className='py-1 text-2xl text-gray-700 dark:text-gray-200'>
        <li>
          <Link onClick={() => setDropdown(false)} to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            All Ebooks
          </Link>
        </li>
        
      </ul>
      <div className="py-1">
        <span className='ml-4 text-xl cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default DropDownLoggedin;
