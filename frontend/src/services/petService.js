import { sample_pets } from "../data";

export const getAll = async () => sample_pets;
export const search = async (searchTerm) => sample_pets.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));