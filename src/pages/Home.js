import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Genres, Normal, Nav, Latest,Popular, Profile, GetMeToTop } from '../components/export';

const Home = () => {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Normal />} />
        <Route path="popular" element={<Popular />} />
        <Route path="genres" element={<Genres />} />
        <Route path="latest" element={<Latest />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <GetMeToTop/>
    </div>
  );
};

export default Home;
