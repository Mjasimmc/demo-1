import React, { useState } from 'react';

const NamePage = ({ setName }) => {
  const [nameInput, setNameInput] = useState('');

  const handleSubmit = () => {
    setName(nameInput);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-400 to-teal-400 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-4">Enter Your Name</h2>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className="p-2 rounded text-gray-800 mb-4"
        placeholder="Your Name"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-6 rounded shadow-lg hover:bg-green-600 transition-colors"
      >
        Save Name
      </button>
    </div>
  );
};

export default NamePage;
