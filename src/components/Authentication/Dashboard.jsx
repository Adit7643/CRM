import React from 'react';
import login from '../../assets/loginImage.png';
import { FaGoogle } from 'react-icons/fa';

export const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Image Section */}
      <div className="flex-1">
        <img src={login} alt="CRM" className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <form className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login Here. Your Customers Are Waiting.
          </h2>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Google Login Button */}
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 mb-4 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>

          {/* Call to action for signup */}
          <p className="text-sm text-center text-gray-600 mb-4">
            New here?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up here
            </a>
          </p>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
