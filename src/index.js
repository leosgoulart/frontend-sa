import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './Screens/Home';
import Login from './Screens/Login';
import Loja from './Screens/Loja';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/Loja",
    element: <Loja/>
  }

]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

