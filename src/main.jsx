import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Overview from "./pages/Overview.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import EditBlog from "./pages/EditBlog.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            path: "/",
            element: <Home/>
        }],
    }, {
        path: "/overview",
        element: <Overview/>
    },
    {
      path: "/detail/:id",
      element: <Detail/>
    },
    {
        path: "/edit-blog/:id",
        element: <EditBlog/>
    },
    {
        path:"/create-blog",
        element:<CreateBlog/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </React.StrictMode>,
)
