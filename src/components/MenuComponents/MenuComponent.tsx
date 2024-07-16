import React from 'react';
import {Link} from "react-router-dom";
import styles from './menuComponent.module.css'
const MenuComponent = () => {
    return (
        <div>
            <ul className={styles.menu}>
            <li><Link className={styles.linkMenu} to={"/users"}>Users Page</Link></li>
            <li><Link className={styles.linkMenu} to={"/posts"}>Posts Page</Link></li>
            <li><Link className={styles.linkMenu} to={"/comments"}>Comments Page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;