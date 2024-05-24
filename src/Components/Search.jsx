import React, { useState, useRef } from 'react';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`./products?q=${searchRef.current.value}`);
    setShowSearch(false);
  };

  return (
    <div className='mx-auto max-w-[50%] mt-4'>
      <form onSubmit={handleSubmit} className='flex items-center'>
        <div className='relative w-full'>
          <IoMdSearch className='absolute top-1/2 left-2 text-black -translate-y-1/2 text-gray-400' />
          <input
            type="text"
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full p-2 pl-10 rounded-l-lg bg-gray-50 border'
          />
        </div>
        <button type='submit' className='p-2 ml-2 bg-green-400 rounded-r-lg'>Search</button>
      </form>
    </div>
  );
};

export default Search;
