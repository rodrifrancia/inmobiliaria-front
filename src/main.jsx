import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Paginas/Index.jsx'
import Login from './Paginas/Login.jsx'
import Register from './Paginas/Register.jsx'
import Dashboard from './Paginas/Dashboard.jsx'
import Cuenta from './Paginas/Cuenta.jsx'
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
        path:"/register",
        element:<Register/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
        path:"/account",
        element:<Cuenta/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router}/>
)

