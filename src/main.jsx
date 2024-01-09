import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './Main/Main.jsx';
import Home from './Home/Home.jsx';
import SingIn from './SignIn/SingIn.jsx';
import Book from './Book/Book.jsx';
import Welcomepage from './Welcomepage/Welcomepage.jsx';
import SignUp from './SingUp/SignUp.jsx';
import AuthPoviders from './AnotherProvider/AuthPoviders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
path:'/',
element:<Welcomepage></Welcomepage>
      },

      {
        path: '/Home',
        element:<Home></Home>
      },
      {
        path:'/SingIn',
        element:<SingIn></SingIn>
      },
      {
        path:'/Book',
        element:<PrivateRoute><Book></Book></PrivateRoute>
      },
      {
        path: '/SignUp',
        element:<SignUp></SignUp>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthPoviders>
  <RouterProvider router={router} />
  </AuthPoviders>
  </React.StrictMode>,
)
