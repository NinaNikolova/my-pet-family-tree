import { sample_pets, sample_tags } from "../data";

export const getAll = async () => sample_pets.filter(pet => pet.name !== 'неизвестен');
export const search = async (searchTerm) => sample_pets.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getAllTags = async () => sample_tags;
export const getAllByTag = async (tag) => {
    if (tag === 'всички') {
        return getAll();
    } else {
        return sample_pets.filter(item => item.tags === tag);
    }

};