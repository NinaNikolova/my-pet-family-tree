import React, { useEffect, useReducer } from 'react';
import { getAll, getAllTags, getAllByTag, search } from '../../services/petService';
import Tumbnails from '../../components/Tumbnails/Tumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';

const initialState = { pets: [], tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'PETS_LOADED':
            return { ...state, pets: action.payload };
        case 'TAGS_LOADED':
            return { ...state, tags: action.payload };
        default:
            return state;
    }
};
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { pets, tags } = state;
    const { searchTerm, tag } = useParams();

    useEffect(() => {
        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
        const loadPets = tag ? getAllByTag(tag) : searchTerm ? search(searchTerm) : getAll();
        loadPets.then(pets => dispatch({ type: 'PETS_LOADED', payload: pets }));
    }, [searchTerm, tag]);
    return (
        <>
            <Search />
            <Tags tags={tags} />
            <Tumbnails pets={pets} />
        </>
    );
}
