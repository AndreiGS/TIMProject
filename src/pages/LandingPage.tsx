import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-8 flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Your Journey Starts Here
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover the joy of cycling with our easy-to-use bike sharing
            platform. Find, unlock, and ride bikes in cities around the world.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Link
            to="/app"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Try the App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
