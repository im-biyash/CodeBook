import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
const DropDownLoggedin = ({setDropdown}) => {


  const handleLogout = () =>{
    sessionStorage.removeItem('token');
  
    sessionStorage.removeItem('cbid');
    navigate("/")
  }
  const navigate = useNavigate();
  return (
    <div id="dropdown" className="select-none absolute top-11 right-0 z-10 w-43 dark:bg-slate-800">
      <div>
        <div>bsstha21@GMAIL.COM</div>
      </div>
      <ul className='py-1 text-xl text-gray-700 dark:text-gray-200'>
        <li>
            <Link  onClick = {() => setDropdown(false)} to = "/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">all Ebooks</Link>
        </li>
        <li>
        <Link  onClick = {() => setDropdown(false)} to = "/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
        </li>
      </ul>
      <div className="py-1">
        <span className='px-2 py-4 ml-4 cursor-pointer text-sm'   onClick={handleLogout}>Logout</span>
      </div>
    </div>
  )
}

export default DropDownLoggedin
