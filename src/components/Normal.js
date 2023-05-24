import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import fetchMovieData from '../apiCall';

const Normal = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovieData();
        setData(result);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      {/* {data ? data.map((elem) => <h1>{elem.title}</h1>) : null} */}
    </div>
  );
};

export default Normal;
