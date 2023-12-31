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
import AddToy from './components/pages/AddToy/AddToy';
import ToyDetails from './components/pages/ToyDetails/ToyDetails';
import MyToy from './components/pages/MyToy/MyToy';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdatedToy from './components/pages/MyToy/UpdatedToy';
import Blogs from './components/pages/Blogs/Blogs';

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
        loader: () => fetch('https://toy-shop-server-eight.vercel.app/allToys'),
      },
      {
        path:'/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/allToys/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-shop-server-eight.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/myToy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path: '/updatedToy/:id',
        element: <UpdatedToy></UpdatedToy>,
        loader: ({params}) => fetch(`https://toy-shop-server-eight.vercel.app/allToys/${params.id}`)
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
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
