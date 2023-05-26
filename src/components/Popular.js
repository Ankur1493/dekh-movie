import React, { useEffect, useState } from 'react';
import axios from '../apiCall';
import Layout from "./Layout";

const Popular = () => {
  const [data, setData] = useState([]);
  const API_KEY = "49201db0d2374f410ce50ffd8c1b3595";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`);
      setData(request.data.results);
    }
    fetchData();
  }, []);

  return (
      <div>
        <h2 style={{ paddingTop: '60px', paddingLeft: "10px", position: "fixed"}}>Popular</h2>
        {data.map(movie => (
        <Layout key={movie.id} title={movie.title} img={movie.poster_path} head= {"Normal"} overview = {movie.overview}/>
        ))}
      </div>  
    )
}

export default Popular