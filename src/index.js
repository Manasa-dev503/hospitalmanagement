import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import AdminDashboard from './features/AdminDashboard/AdminDashboard';
import Adddata from './features/AdminDashboard/Adddata';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginDetails from './LoginDetails/LoginDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
        children:[
          {
            path:"/admindashboard/adddata",
            element:<Adddata></Adddata>
          },
        ]
      },
      {
        path:"/admindashboard/login",
        element: <LoginDetails></LoginDetails>
      },
      {
        path:"/admindashboard/adddata/signout",
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path:"/admindashboard/login/feed",
        element: <LoginDetails></LoginDetails>
      }

    ]
   
  }
  
    
  
])
  

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
