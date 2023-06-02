import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar from '../components/Navbar';

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    Axios.post(
      "http://localhost:6901/login",
      {
        email: emailValue,
        password: passwordValue,
      },
      { withCredentials: true }
    ).then((res) => {
      if (res.data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: emailValue,
          })
        );
        navigate('/mylibrary'); // Navigate to '/mylibrary' route
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen h-screen bg-[#2595ea]">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md w-2/3">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
              <input ref={email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your password</label>
              <input ref={password} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <button onClick={submitHandle} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
