import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  React.useEffect(() => {
    console.log(character); // This will log the updated state
  }, [character]);
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

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  return <CharacterComponent character={character} />;
};