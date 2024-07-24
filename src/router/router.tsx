import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {index: true, element: <AuthPage/>},
        {path: "/cars", element: <CarsPage/>}
    ]

}])
export default router