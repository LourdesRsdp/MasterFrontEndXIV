import axios from 'axios';
import { CharacterEntityApi } from 'pods/hotel-collection/api';

let characterCollection = "https://rickandmortyapi.com/api/character";

export const getCharacterById = async (id: string): Promise<CharacterEntityApi> => {
  try {
    const response = await axios.get<CharacterEntityApi>(`${characterCollection}/${id}`);
    
    
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await axios.get<CharacterEntityApi[]>(characterCollection);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};