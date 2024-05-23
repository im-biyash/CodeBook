import React from 'react';
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the search submit logic here
  };

  return (
    <div className='mx-auto max-w-[50%] mt-4'> {/* Added margin-top for better positioning */}
      <form onSubmit={handleSubmit} className='flex items-center'>
        <div className='relative w-full'>
          <IoMdSearch className='absolute top-1/2 left-2 text-black -translate-y-1/2 text-gray-400' />
          <input
            type="text"
            className='w-full p-2 pl-10 rounded-l-lg bg-gray-50 border' // Adjusted padding-left for better icon spacing
          />
        </div>
        <button type='submit' className='p-2 ml-2 bg-green-400 rounded-r-lg'>Search</button> {/* Added rounded-right */}
      </form>
    </div>
  );
};

export default Search;
