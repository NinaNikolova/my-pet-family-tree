import React from 'react';
import classes from './notFoundPage.module.css';

export default function NotFoundPage() {
    return (

        <div className={classes.container}>
            <div className={classes.image}>
                <img src='https://pngimg.com/d/pusheen_PNG32.png' alt='404 not found gif' />
            </div>

            <div div className={classes['not-found']}>
                <h1>
                    Оххх,<br /> нещо се счупи...
                </h1>

                <h3>Грешка 404 - страницата не е намерена.</h3>

                <a href="/">
                    <button>Обратно към начална страница</button>
                </a>
            </div>
        </div>

    );
}
