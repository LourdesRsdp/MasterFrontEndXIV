import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;



  return (

    <div className={classes.container}>
      <Link to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className={classes.card}>
          <CardHeader
            title={character.name}
            subheader={character.status}
          />
          <CardContent>
            <div className={classes.content}>
              <CardMedia
                image={character.image}
                className={classes.media}
              />
              <Typography variant="subtitle1" gutterBottom className={classes.species}>Species:
                {character.species}
              </Typography>
              <Typography variant="subtitle1" gutterBottom className={classes.gender}>Gender: 
                {character.gender}
              </Typography>
              {<Typography variant="subtitle1" gutterBottom className={classes.origin}>Origin: 
                {character.origin}
              </Typography>}
             
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
