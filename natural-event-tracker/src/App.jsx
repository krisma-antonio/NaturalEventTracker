import { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DonationPage from './components/DonationPage';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';

function App() {

  return (
    <>
      <Routes>
            <Route path="*" element={<NotFoundPage />} /> 
            <Route index element={<Home />} />
            <Route exact path="/donate" element={<DonationPage />} /> 
      </Routes>

    </>
  )
}

export default App
