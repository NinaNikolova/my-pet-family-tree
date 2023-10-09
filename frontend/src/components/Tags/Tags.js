import React from 'react';
import classes from './tags.module.css';
import { Link } from 'react-router-dom';

export default function Tags({ tags, forPetPage }) {
    return (
        <div
            className={classes.container}
            style={{
                justifyContent: forPetPage ? 'start' : 'center',
            }}
        >
            {tags.map(tag => (
                <Link key={tag.name} to={`/tag/${tag.name}`}>
                    {tag.name}
                    {!forPetPage && `(${tag.count})`}
                </Link>
            ))}
        </div>
    );
}