import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';
import { linkRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    try {
      const apiCharacter = await api.getCharacterById(id);
      const characterVm = mapCharacterFromApiToVm(apiCharacter);
      setCharacter(characterVm);
    } catch (error) {
      console.error('Error loading character:', error);
      navigate('/error');
    }
  };

  const handleSave = async (updatedCharacter: Character) => {
    try {
      const apiCharacter = mapCharacterFromVmToApi(updatedCharacter);
      await api.saveCharacter(apiCharacter);
      setCharacter(updatedCharacter);
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };
  
  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  function handleEdit(id: string): void {
    throw new Error('Function not implemented.');
  }

  return <CharacterComponent character={character} onEdit={() => handleEdit(id)} onSave={handleSave} />;
};
