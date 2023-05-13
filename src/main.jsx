import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Paginas/Index.jsx'
import Login from './Paginas/Login.jsx'
import Dashboard from './Paginas/Dashboard.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

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
        path:"/dashboard",
        element:<Dashboard/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   
        <RouterProvider router={router}/>
    
    
)
