import React from 'react';
import { FaWallet, FaSignOutAlt, FaGamepad, FaCog, FaUserEdit, FaLock, FaBell } from 'react-icons/fa';

const transactions = [
    { date: '2024-08-20', type: 'Deposit', amount: '$500', status: 'Completed', statusColor: 'text-green-500' },
    { date: '2024-08-19', type: 'Withdraw', amount: '$200', status: 'Completed', statusColor: 'text-green-500' },
    { date: '2024-08-18', type: 'Withdraw', amount: '$300', status: 'Pending', statusColor: 'text-red-500' },
    // Add more transactions as needed
];

const DashboardPage = ({ mobile = "+91 999 999 9999", name = "Developer Jasim" }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-teal-600 text-white flex flex-col">
            <header className="w-full p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-teal-600 flex flex-col sm:flex-row items-center justify-between shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold truncate w-full sm:w-auto text-center sm:text-left">
                    Dashboard
                </h1>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                    <div className="text-lg sm:text-xl truncate w-full sm:w-auto text-center sm:text-left">
                        Welcome, {name}
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white grid place-content-center font-semibold text-xl sm:text-2xl bg-gradient-to-br from-red-500 to-blue-500">
                        {name.charAt(0)}
                    </div>
                </div>
            </header>


            <main className="flex flex-col items-center w-full max-w-6xl mx-auto p-8 space-y-8">
                {/* User Information */}
                <section className="bg-white text-gray-800 rounded-lg shadow-lg w-full p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Account Details</h3>
                    <div className="space-y-2">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Mobile:</strong> {mobile}</p>
                        <p><strong>Email:</strong> user@example.com</p>
                    </div>
                </section>

                {/* Actions */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
                    <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-700 transition-colors flex items-center justify-center transform hover:scale-105">
                        <FaWallet className="mr-2" /> Deposit
                    </button>
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-colors flex items-center justify-center transform hover:scale-105">
                        <FaWallet className="mr-2" /> Withdraw
                    </button>
                    <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-700 transition-colors flex items-center justify-center transform hover:scale-105">
                        <FaWallet className="mr-2" /> Wallet Balance
                    </button>
                    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition-colors flex items-center justify-center transform hover:scale-105">
                        <FaSignOutAlt className="mr-2" /> Sign Out
                    </button>
                </section>

                {/* Transaction History */}
                <section className="bg-white text-gray-800 rounded-lg shadow-lg w-full p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Transaction History</h3>
                    <div className="space-y-4">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between">
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full">
                                    <p className="font-semibold bg-gray-400 px-2 py-1 rounded-md w-[6.3rem]">{transaction.date}</p>
                                    <p className="md:ml-4 font-medium">{transaction.type}</p>
                                    <p className="md:ml-4 text-lg font-bold">{transaction.amount}</p>
                                </div>
                                <div className={`flex items-center mt-2 md:mt-0 ${transaction.statusColor}`}>
                                    <span className="mr-2">{transaction.status}</span>
                                    <FaWallet />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Games Section */}
                <section className="w-full mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Games</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-colors flex flex-col items-center transform hover:scale-105">
                            <FaGamepad className="mb-2 text-2xl" />
                            <span className="text-lg font-medium">Play Game 1</span>
                            <small className="text-xs text-gray-300 mt-2">A strategy game.</small>
                        </button>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-colors flex flex-col items-center transform hover:scale-105">
                            <FaGamepad className="mb-2 text-2xl" />
                            <span className="text-lg font-medium">Play Game 2</span>
                            <small className="text-xs text-gray-300 mt-2">An action game.</small>
                        </button>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-colors flex flex-col items-center transform hover:scale-105">
                            <FaGamepad className="mb-2 text-2xl" />
                            <span className="text-lg font-medium">Play Game 3</span>
                            <small className="text-xs text-gray-300 mt-2">A puzzle game.</small>
                        </button>
                    </div>
                </section>

                {/* Settings */}
                <section className="bg-white text-gray-800 rounded-lg shadow-lg w-full p-6">
                    <h3 className="text-2xl font-semibold mb-4">Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-colors flex items-center justify-center transform hover:scale-105">
                            <FaUserEdit className="mr-2" /> Update Profile
                        </button>
                        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition-colors flex items-center justify-center transform hover:scale-105">
                            <FaLock className="mr-2" /> Change Password
                        </button>
                        <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-700 transition-colors flex items-center justify-center transform hover:scale-105">
                            <FaBell className="mr-2" /> Notification Settings
                        </button>
                    </div>
                </section>
            </main>

            <footer className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-center p-4 mt-auto">
                &copy; 2024 Your Company. All rights reserved.
            </footer>
        </div>
    );
};

export default DashboardPage;
