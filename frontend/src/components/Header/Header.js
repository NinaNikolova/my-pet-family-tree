import React from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.css';


export default function Header() {
    const user = {
        name: 'Нина',
    };

    const pet = {
        name: 'Криси'
    };

    const logout = () => { }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    Семейство и род на моя домашен любимец
                </Link>
                <nav>
                    <ul>
                        {user ? (
                            <li className={classes.menu_container}>
                                <Link to="/profile">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to="/profile">{user.name}</Link>
                                    <Link to="/orders">{pet.name}</Link>
                                    <a onClick={logout}>Излез от профила си</a>
                                </div>
                            </li>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}

                        <li>
                            <Link to="/cart">
                                Домашен любимец: {pet.name}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
