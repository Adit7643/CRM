import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Authentication/Dashboard';
import { LandingPage } from './components/HomePage/LandingPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<LandingPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;