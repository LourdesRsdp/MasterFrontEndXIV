import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

let characterCollection = "http://localhost:3000/characters";

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await axios.get(characterCollection);
    
    return response.data.results;
  } catch (error) {
    
    throw error;
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${characterCollection}/${id}`);
    return true;
  } catch (error) {
    
    return false;
  }
};
