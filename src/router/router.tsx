import {createBrowserRouter} from "react-router-dom";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true, element: <AuthPage/>
            },
            {
                path: "/cars", element: <CarsPage/>
            }
        ]
    }
])
export default router;