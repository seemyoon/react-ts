import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <li><Link to={"users"}>users</Link></li>
            <li><Link to={"posts"}>posts</Link></li>
            <li><Link to={"userPosts"}>user with posts</Link></li>
        </div>
    );
};

export default HeaderComponent;