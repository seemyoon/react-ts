import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <li><Link to={"/users"}>Users Page</Link></li>
            <li><Link to={"/posts"}>Posts Page</Link></li>
            <li><Link to={"/comments"}>Comments Page</Link></li>
        </div>
    );
};

export default MenuComponent;