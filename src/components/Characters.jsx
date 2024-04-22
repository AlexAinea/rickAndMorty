import React, { useState, useEffect } from 'react';
import './NavBar.css';

const Characters = () => {
  const [charShow, setCharShow] = useState([]);
  const [namee, setNamee] = useState('');
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    const value = e.target.value;
    setNamee(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharShow(prevCharShow => [...prevCharShow, namee]);
    setCurrentPage(1);
  };

  useEffect(() => {
    async function fetchData(page) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setCharacters(data.results);
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
      {/* Remove the continuous column display */}
      {/* {characters.map((character) => {
        return (
          <div key={character.id} className='border-4 rounded-2xl rickGreenBorder'>
            <img className='h-72' src={character.image} alt="image" />
            <h1>CHARACTER NAME: {character.name}</h1>
            <p>SPECIES: {character.species}</p>
            <p>STATUS: {character.status}</p>
            <p>GENDER: {character.gender}</p>
            <p>LOCATION: {character.location.name}</p> 
          </div>
        );
      })} */}
      <div className='grid grid-cols-4 gap-20'>
        {characters.map((character, index) => (
          <div className='border-4 rounded-2xl rickGreenBorder ' key={index}>
            <img className='h-72' src={character.image} alt="image" />
            <h1>CHARACTER NAME: {character.name}</h1>
            <p>SPECIES: {character.species}</p>
            <p>STATUS: {character.status}</p>
            <p>GENDER: {character.gender}</p>
            <p>LOCATION: {character.location.name}</p>
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

export default Characters;
