import React, { useState, useEffect } from 'react';
import ShowList from './ShowList';

const HomeScreen = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));

    }, []);
    console.log(shows)

  const handleShowClick = (showId) => {
    history.push(`/show/${showId}`);
  };

  return (
    <div className='container pt-20 flex flex-col text-center justify-center dark:color-white dark:bg-slate-900'>
      <h1 className='lg:text-5xl bold '>All Show</h1>
      <ShowList shows={shows} onShowClick={handleShowClick} />
    </div>
  );
};

export default HomeScreen;
