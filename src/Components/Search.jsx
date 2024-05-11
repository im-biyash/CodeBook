import React  from 'react';
import { IoMdSearch } from "react-icons/io";

const Search = () => {
   
    return (
        <div className='mx-auto max-w-[50%]'>
            <form onSubmit={handleSubmit} className='flex items-center'>
                <div className='relative w-full'>
                    <span>
                        <IoMdSearch className='absolute top-1/2 left-2 text-black -translate-y-1/2 text-gray-400' />
                    </span>
                    <input
                        type="text"
                        
                        className='w-full p-2 rounded-l-lg bg-gray-50 border'
                    />
                </div>
                <button type='submit' className='p-2 ml-2 bg-green-400 rounded'>Search</button>
            </form>
        </div>
    );
}

export default Search;
