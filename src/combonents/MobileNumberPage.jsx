import React, { useState } from 'react';

const MobileNumberPage = ({ setMobile }) => {
  const [mobileInput, setMobileInput] = useState('');

  const handleSubmit = () => {
    setMobile(mobileInput);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-400 to-teal-400 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-4">Enter Your Mobile Number</h2>
      <input
        type="text"
        value={mobileInput}
        onChange={(e) => setMobileInput(e.target.value)}
        className="p-2 rounded text-gray-800 mb-4"
        placeholder="Mobile Number"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-6 rounded shadow-lg hover:bg-green-600 transition-colors"
      >
        Submit
      </button>
    </div>
  );
};

export default MobileNumberPage;
