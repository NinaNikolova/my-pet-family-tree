import React, { useEffect, useState } from 'react';
import classes from './petPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { getById } from '../../services/petService';
import NotFound from '../../components/NotFound/NotFound';


export default function PetPage() {
    const [pet, setPet] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getById(id).then(setPet);
    }, [id]);
    return (
        <>
            {!pet ? (<NotFound message="Котката не е намерена!" linkText="Върнете се към началната страница!" />) : <div className={classes.container} >
                <img className={classes.image} src={pet.imageUrl} alt={pet.name} />
                <div className={classes.details}>
                    <div className={classes.header} >
                        <span className={classes.name}>{pet.name}</span>
                    </div>
                    <div className={classes.tags}>
                        {pet.tags === 'Криси' ? 'Профил' : pet.tags}
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

                    <div className={classes.parents}>
                        {pet.parents?.map(p => (
                            <span key={p.id + p.name + + p.age + new Date().getTime()} ><Link to={`/pet/${p.id}`}> {p.name},</Link></span>
                        ))}
                    </div>

                    <div className={classes.siblings}>
                        {pet.siblings?.map(p => (
                            <span key={p.id + new Date().getTime() + p.name}> <Link to={`/pet/${p.id}`}> {p.description.size},</Link></span>
                        ))}
                    </div>
                    <div className={classes.children}>
                        {pet.children?.map(p => (
                            <span key={p.id + p.age + new Date().getTime()}> <Link to={`/pet/${p.id}`}>{p.name},</Link></span>
                        ))}
                    </div>

                    <div className={classes.description}>
                        {pet.description}
                    </div>
                </div>
            </div >}
        </>
    );
}
