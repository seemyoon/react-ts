import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import UsersPages from "./pages/UsersPages";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        // errorLayout: <ErrorLayout/>
        children: [
            {
                path: "users",
                element: <UsersPages/>
            },
            {
                path: "users/:id",
                element: <UserPage/>
            },
            {
                path: "posts",
                element: <PostsPage/>
            },
            {
                path: "comments",
                element: <CommentsPage/>
            },
        ]
    },

])
root.render(
    <RouterProvider router={router}/>
);