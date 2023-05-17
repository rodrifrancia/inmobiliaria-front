import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Paginas/Index.jsx'
import Login from './Paginas/Login.jsx'
import Dashboard from './Paginas/Dashboard.jsx'
import Register from "./Paginas/Register.jsx"
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
    },
    {
        path:"/register",
        element:<Register/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   
        <RouterProvider router={router}/>
    
    
)
