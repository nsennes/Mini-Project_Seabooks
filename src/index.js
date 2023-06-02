import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from "./pages/Login";
import MyLibrary from './pages/MyLibrary';
import 'flowbite';
import 'tw-elements';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "signup",
    element: <SignUp/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "mylibrary",
    element: <MyLibrary/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
