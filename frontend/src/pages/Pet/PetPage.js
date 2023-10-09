import React, { useEffect, useState } from 'react';
import classes from './petPage.module.css';
import { useParams } from 'react-router-dom';
import { getById } from '../../services/petService';


export default function PetPage() {
    const [pet, setPet] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getById(id).then(setPet);
    }, [id]);
    return (
        <>
            {pet && <div className={classes.container} >
                <img className={classes.image} src={pet.imageUrl} alt={pet.name} />
                <div className={classes.details}>
                    <div className={classes.header} >
                        <span className={classes.name}>{pet.name}</span>
                    </div>
                    <div className={classes.tags}>
                        {pet.tags === 'Криси' ? '' : pet.tags}
                    </div>


                    <div className={classes.gender}>
                        {pet.gender}
                    </div>


                    <div className={classes.color}>
                        {pet.colors?.map(color => (
                            <span key={color}> {color},</span>
                        ))}
                    </div>



                    <div className={classes.age}>
                        <span>
                            <strong>{pet.age}</strong> години
                        </span>
                    </div>

                    <div className={classes.breed}>
                        {pet.breed}
                    </div>
                </div>
            </div>}
        </>
    );
}
