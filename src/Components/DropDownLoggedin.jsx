import React from 'react'

const DropDownLoggedin = () => {
  return (
    <div id="dropdown" className="select-none absolute top-10 right-0 z-10 w-44">
      <div>
        <div>bsstha21@GMAIL.COM</div>
      </div>
      <ul className='py-1 text-xl text-gray-700 dark:text-gray-200'>
        <li>
            <Link to = "/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">all Ebooks</Link>
        </li>
        <li>
        <Link to = "/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">all Ebooks</Link>
        </li>
      </ul>
      <div className="py-1">
        <span></span>
      </div>
    </div>
  )
}

export default DropDownLoggedin
