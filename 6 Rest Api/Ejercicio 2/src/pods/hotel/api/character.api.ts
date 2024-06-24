import axios from 'axios';
import { CharacterEntityApi } from 'pods/hotel-collection/api';
import { Character } from './character.api-model';

let characterCollection = "http://localhost:3000/characters";

export const getCharacterById = async (id: string): Promise<CharacterEntityApi> => {
  try {
    const response = await axios.get<CharacterEntityApi>(`${characterCollection}/${id}`);
    console.log(response);
    
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

export const saveCharacter = async (character: Character): Promise<void> => {
  const response = await fetch(`/api/characters/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });

  if (!response.ok) {
    throw new Error('Error saving character');
  }
};