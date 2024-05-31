import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={character.name}
          subheader={character.status}
        />
        <CardContent>
          <CardMedia
            component="img"
            image={character.image}
            alt={character.name}
            className={classes.media}
          />
          <Typography variant="subtitle1" gutterBottom className={classes.text}>
            <strong>Species:</strong> {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.text}>
            <strong>Gender:</strong> {character.gender}
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.text}>
            <strong>Origin:</strong> {character.origin}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
