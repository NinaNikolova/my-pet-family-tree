import React, { useEffect, useReducer } from 'react';
import { getAll } from '../../services/petService';
import Tumbnails from '../../components/Tumbnails/Tumbnails';

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
    useEffect(() => {
        getAll().then(pets => dispatch({ type: 'PETS_LOADED', payload: pets }));
    }, []);
    return (
        <>
            <Tumbnails pets={pets} />
        </>
    );
}
