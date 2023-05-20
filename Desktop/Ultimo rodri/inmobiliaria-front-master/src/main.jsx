import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Paginas/Index.jsx'
import Login from './Paginas/Login.jsx'
import Register from './Paginas/Register.jsx'
import Dashboard from './Paginas/Dashboard.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PropietarioVista from './components/Propietario/PropietarioVista';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Index/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
      path: '/propietario',
      element: <PropietarioVista />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(

        <RouterProvider router={router}/>
    
    
)

