import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MobileNumberPage from '../combonents/MobileNumberPage';
import OtpPage from '../combonents/OtpPage';
import NamePage from '../combonents/NamePage';
import DashboardPage from '../combonents/DashboardPage';


const UserDashboardPage = () => {
  const [mobile, setMobile] = useState('+91 999 999 9999');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('Developer@Jasim');
  const navigate = useNavigate();

  // Functions to handle navigation within the dashboard
  const handleMobileSubmit = (mobileInput) => {
    navigate('/user-dashboard/otp'); // Navigate to OTP page
  };

  const handleOtpSubmit = (otpInput) => {
  
    navigate('/user-dashboard/name'); // Navigate to Name page
  };

  const handleNameSubmit = (nameInput) => {
    
    navigate('/user-dashboard'); // Navigate to Dashboard page
  };

  return (
    <Routes>
      <Route
        path="/mobile"
        element={<MobileNumberPage setMobile={handleMobileSubmit} />}
      />
      <Route
        path="/otp"
        element={<OtpPage setOtp={handleOtpSubmit} />}
      />
      <Route
        path="/name"
        element={<NamePage setName={handleNameSubmit} />}
      />
      <Route
        path="/"
        element={<DashboardPage mobile={mobile} name={name} />}
      />
    </Routes>
  );
};

export default UserDashboardPage;
