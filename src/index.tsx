import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import MainLayout from "./layouts/MainLayout";
import PostsOfUserPage from "./pages/PostsPage/PostsOfUserPage";
import UsersPages from "./pages/UsersPage/UsersPages";
import CommentsOfPostPage from "./pages/CommentsPage/CommentsOfPostPage";


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
                element: <PostsOfUserPage/>
            },
            {
                path: "posts",
                element: <PostsPage/>
            },
            {
                path: "users/:id/posts/:postId",
                element: <CommentsOfPostPage/>
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