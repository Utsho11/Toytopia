import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import SignUp from './components/LogIn/SignUp/SignUp';
import SignIn from './components/LogIn/SignIn/SignIn';
import AuthProvider from './components/Providers/AuthProvider/AuthProvider';
import Error from './components/Error/Error';
import AllToys from './components/pages/AllToys/AllToys';
import Body from './components/Home/Body/Body';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Body></Body>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path:"/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/allToys'),
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
