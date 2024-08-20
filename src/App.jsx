import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserDashboardPage from './pages/UserDashboard';
// import UserDashboardPage from './pages/UserDashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-dashboard/*" element={<UserDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
