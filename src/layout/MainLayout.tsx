import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;