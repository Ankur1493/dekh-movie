// import React, { useEffect, useState } from 'react';
// import fetchMovieData from '../apiCall';
import React from "react";
import Layout from "./Layout";

const Normal = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetchMovieData();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching movie data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="normal">
      <Layout title = {"The Batman"} img = {"test-poster-image"}/>
    </div>
  );
};

export default Normal;
