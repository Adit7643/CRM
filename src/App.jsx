import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Authentication/Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;