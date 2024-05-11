// FilterBar.js
import React from 'react';

const FilterBar = ({ handleSort, close, setRating, setBestSeller, setInStock }) => {
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    handleSort(selectedSort);
  };

  const handleRatingChange = (event) => {
    const selectedRating = event.target.value;
    setRating(selectedRating);
  };

  const handleBestSellerChange = (event) => {
    const checked = event.target.checked;
    setBestSeller(checked);
  };

  const handleInStockChange = (event) => {
    const checked = event.target.checked;
    setInStock(checked);
  };
  const clearFilter = () =>{
    setRating('');
    setBestSeller(false);
    setInStock(false);
    close(false);
  }

  return (
    <div className="filter-bar bg-white h-screen fixed top-0 left-0 w-[20%] text-black">
      <div className='flex justify-around'>
        <h1 className='text-3xl text-center'>FilterBar</h1>
        <button className='mt-2' onClick={() => close(!close)}>Close</button>
      </div>

      <h2 className="text-xl">Sort By:</h2>
      <div className='p-2 flex items-center'>
        <input
          type="radio"
          id="priceLowToHigh"
          name="sortOption"
          value="priceLowToHigh"
          onChange={handleSortChange}
        />
        <label htmlFor="priceLowToHigh">Price Low to High</label>
      </div>
      <div className='p-2'>
        <input
          type="radio"
          id="priceHighToLow"
          name="sortOption"
          value="priceHighToLow"
          onChange={handleSortChange}
        />
        <label htmlFor="priceHighToLow">Price High to Low</label>
      </div>

      <div className='p-2 mt-4'>
        <h2 className="mt-4 text-xl">Rating:</h2>
        <input
          type="radio"
          id="4stars"
          name="ratingOption"
          value="4"
          onChange={handleRatingChange}
        />
        <label htmlFor="4stars">4 Stars and above</label>
        <br />
        <input
          type="radio"
          id="3stars"
          name="ratingOption"
          value="3"
          onChange={handleRatingChange}
        />
        <label htmlFor="3stars">3 Stars and above</label>
        <br />
        <input
          type="radio"
          id="2stars"
          name="ratingOption"
          value="2"
          onChange={handleRatingChange}
        />
        <label htmlFor="2stars">2 Stars and above</label>
        <br />
        <input
          type="radio"
          id="1star"
          name="ratingOption"
          value="1"
          onChange={handleRatingChange}
        />
        <label htmlFor="1star">1 Star and above</label>
      </div>

      <div className='p-2 mt-4'>
        <h2 className="mt-4 text-xl">Other Filters:</h2>
        <div>
          <input
            type="checkbox"
            id="bestSeller"
            name = "otherFilter"
            value="bestSeller"
            onChange={handleBestSellerChange}
          />
          <label htmlFor="bestSeller">Best Seller</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="inStock"
            name = "otherFilter"
            value="inStock"
            onChange={handleInStockChange}
          />
          <label htmlFor="inStock">In Stock</label>
        </div>
      </div>

      <div className="close">
        <button onClick={clearFilter}>Clear filter</button>
      </div>
    </div>
  );
};

export default FilterBar;
