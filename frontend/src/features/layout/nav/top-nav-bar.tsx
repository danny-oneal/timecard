import React from 'react';
import { Link } from 'react-router-dom';

export const TopNavbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <Link to="/" className="text-white font-bold text-lg">
                        Timecard
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/login"
                                className="text-white hover:text-gray-300 transition duration-300"
                            >
                                Login
                            </Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};