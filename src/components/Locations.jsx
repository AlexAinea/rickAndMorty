import React, { useState, useEffect } from 'react';
import './Locations.css';

const Locations = () => {
  const [locationShow, setLocationShow] = useState([]);
  const [namee, setNamee] = useState('');
  const [locations, setLocations] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    const value = e.target.value;
    setNamee(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationShow(prevLocation => [...prevLocation, namee]);
    setCurrentPage(1); 
  };

  useEffect(() => {
    async function fetchData(page) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
        const data = await response.json();
        setLocations(data.results);
        setTotalPages(data.info.pages);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(currentPage); 
  }, [currentPage]); 

  const handlePaginationClick = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={namee} onChange={handleSearch} type="text" placeholder='Search' className='center relative opacity-40 px-10 border-none rounded-2xl' />
        <button type="submit"></button>
      </form>
      {locations.map((location) => {
        if (namee === location.name) {
          return (
            <div key={location.id} className='border-4 rounded-2xl rickGreenBorder'>
              <h1>LOCATION NAME: {location.name}</h1>
              <p>DIMENSION: {location.dimension}</p>
              <p>TYPE: {location.type}</p>
            </div>
          );
        }
        return null;
      })}
      <div className='grid grid-cols-3 gap-2.5'>
        {locations.map((location, index) => (
          <div className='border-4 rounded-2xl rickGreenBorder' key={index}>
            <h1>LOCATION NAME: {location.name}</h1>
            <p>DIMENSION: {location.dimension}</p>
            <p>TYPE: {location.type}</p>
          </div>
        ))}
      </div>
      <div id="pagination-container">
        <button className='hoverButton mx-28 rounded bg-green-900 ' onClick={() => handlePaginationClick('prev')}>Previous</button>
        <button className='hoverButton mx-28 rounded bg-green-900 ' onClick={() => handlePaginationClick('next')}>Next</button>
      </div>
    </div>
  );
};

export default Locations;
