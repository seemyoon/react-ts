import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>auth</NavLink></li>
                <li><NavLink to={"/cars"}>cars</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;