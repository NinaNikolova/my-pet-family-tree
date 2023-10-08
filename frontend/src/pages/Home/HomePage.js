import React, { useEffect, useReducer } from 'react';
import { getAll, search } from '../../services/petService';
import Tumbnails from '../../components/Tumbnails/Tumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';

const initialState = { pets: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'PETS_LOADED':
            return { ...state, pets: action.payload };

        default:
            return state;
    }
};
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { pets } = state;
    const { searchTerm } = useParams();

    useEffect(() => {
        const loadPets = searchTerm ? search(searchTerm) : getAll();
        loadPets.then(pets => dispatch({ type: 'PETS_LOADED', payload: pets }));
    }, [searchTerm]);
    return (
        <>
            <Search />
            <Tumbnails pets={pets} />
        </>
    );
}
