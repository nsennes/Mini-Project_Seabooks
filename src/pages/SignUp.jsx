import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Axios from 'axios';

function SignUp() {
  const email = useRef();
  const password = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    Axios.post(
      "http://localhost:6901/signup", // Update with the correct server URL
      {
        email: emailValue,
        password: passwordValue,
      },
      { withCredentials: true }
    )
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem(
            "email",
            JSON.stringify({
              email: emailValue,
            })
          );
        }
      })
      .catch((error) => {
        // Handle any errors
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#2595ea]">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
              <input ref={email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your password</label>
              <input ref={password} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-6">
              <label htmlFor="repeat-password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Repeat password</label>
              <input ref={password} type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-[#c12f2f] hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button type="submit" onClick={submitHandle} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
