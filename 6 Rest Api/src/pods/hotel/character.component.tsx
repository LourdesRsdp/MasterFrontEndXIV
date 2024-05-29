import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  /* console.log('character:', character); */


  return (
    <div className={classes.root}>
      <div>
        <strong>Name:</strong> {character.name}
      </div>
      <div>
        <strong>Species:</strong> {character.species}
      </div>
      <div>
        <strong>Gender:</strong> {character.gender}
      </div>
      {/* Agrega más detalles del personaje aquí si es necesario */}
    </div>
  );
};
