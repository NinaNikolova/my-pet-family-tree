import React from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.css';


export default function Header() {


    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    Родът на моя котарак Криси
                </Link>
                {/* <nav>
                    <ul>
                        <li className={classes.menu_container}>
                            <Link to="/profile">Род и семейство</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">hhhh</Link>
                            </div>
                        </li>





                    </ul>
                </nav> */}
            </div>
        </header>
    );
}
