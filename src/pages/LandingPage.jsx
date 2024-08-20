import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({  name = "Jasim" }) => {
    const navigate = useNavigate();

    const handlePlanNowClick = () => {
        navigate('/user-dashboard/mobile');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-teal-600 text-white flex flex-col ">
            <header className="w-full p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-teal-600 flex flex-col sm:flex-row items-center justify-between shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold truncate w-full sm:w-auto text-center sm:text-left">
                    Game
                </h1>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                    <div className="text-lg sm:text-xl truncate w-full sm:w-auto text-center sm:text-left">
                        Welcome, {name}
                    </div>
                    <div className="w-12 max-sm:hidden h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white grid place-content-center font-semibold text-xl sm:text-2xl bg-gradient-to-br from-red-500 to-blue-500">
                        {name.charAt(0)}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-400 to-teal-400 text-white px-4">
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">Welcome to the Game</h1>
                    <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">Experience thrilling adventures with our latest game releases.</p>
                    <div id="games" className="space-y-8 mb-8 animate__animated animate__fadeIn animate__delay-3s">
                        <h2 className="text-3xl font-semibold mb-4">Our Popular Games</h2>
                        <ul className="space-y-4">
                            <li className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-gray-800 transform hover:scale-105 transition-transform duration-300">Game 1</li>
                            <li className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-gray-800 transform hover:scale-105 transition-transform duration-300">Game 2</li>
                            <li className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-gray-800 transform hover:scale-105 transition-transform duration-300">Game 3</li>
                        </ul>
                    </div>
                    <button
                        onClick={handlePlanNowClick}
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-colors transform hover:scale-105 duration-300"
                    >
                        Plan Now
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer id="contact" className="bg-gradient-to-r from-gray-700 to-gray-800 text-white text-center py-4">
                <p>&copy; 2024 Developer jasim. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
