import React from 'react';
import classes from './tumbnails.module.css';
import { Link } from 'react-router-dom';

export default function Tumbnails({ pets }) {
    return (
        <ul className={classes.list}>
            {pets.map(pet => (
                <li key={pet.id}>
                    <Link to={`/pet/${pet.id}`}>
                        <img
                            className={classes.image}
                            src={`${pet.imageUrl}`}
                            alt={pet.name}
                        />

                        <div className={classes.content}>
                            <div className={classes.name}>{pet.name}</div>

                        </div>
                        <div className={classes.product_item_footer}>
                            <div className={classes.origins}>

                                <span >{pet.breed}</span>

                            </div>
                            <div className={classes.cook_time}>

                                Възраст:{pet.age}г.
                            </div>
                        </div>

                    </Link>
                </li>
            ))}
        </ul>
    );
};