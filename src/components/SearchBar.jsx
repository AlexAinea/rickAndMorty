import React, { useState } from 'react';


const SearchBar = ({ episodeData }) => {
  const [epiSow, setEpiShowName] = useState([]);
  const [namee, setNamee] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setNamee(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEpiShowName(prevEpi => [...prevEpi, namee]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={namee} onChange={handleSearch} type="text" placeholder='Search' className='center relative opacity-40 px-10 border-none rounded-2xl' />
        <button type="submit"></button>
      </form>
      {episodeData.map((episode) => {
        if (namee === episode.name) {
          return (
            <div key={episode.id} className='border-4 rounded-2xl rickGreenBorder'>
              <h1>EPISODE NAME: {episode.name}</h1>
              <p>EPISODE AIR DATE: {episode.air_date}</p>
              <p>EPISODE ID: {episode.id}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SearchBar;
