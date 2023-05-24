import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Genres, Latest, Normal, Nav } from '../components/export';
import Popular from '../components/Popular';

const Home = () => {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path="*" element={<Normal />} />
            <Route path="popular" element={<Popular />} />
            <Route path="genres" element={<Genres />} />
            <Route path="latest" element={<Latest />} />
        </Routes>
    </div>
  );
};

export default Home;
