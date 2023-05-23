import React, { useEffect, useState } from 'react'
import "./Home.css"
import Nav from '../components/Nav'
// import Popular from '../components/Popular'

const Home = () => {

  const [movieData , setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/550?api_key=49201db0d2374f410ce50ffd8c1b3595'
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieData]);

  return (
    <div className = "Home">
        <Nav/>
        
    </div>
  )
}

export default Home