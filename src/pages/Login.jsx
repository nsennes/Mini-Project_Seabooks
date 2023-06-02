import React from 'react';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen h-screen bg-[#2595ea]">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md w-2/3">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
