import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onEdit: (id: string) => void;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onSave } = props;
  const [isEditing, setIsEditing] = React.useState(false);
  const [newQuote, setEditedCharacter] = React.useState<string>();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCharacter(event.target.value);
  };

  const handleSaveClick = () => {
    
    console.log(character);
    console.log(newQuote);
    character.bestSentences.push(newQuote);
    
    onSave(character);
    
    setIsEditing(false);
  };

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
          <Typography variant="subtitle1" gutterBottom className={classes.text}>
            <strong>Best quotes:</strong>
            {isEditing ? (
              <TextField
                value={newQuote}
                onChange={handleChange}
                multiline
                rows={3}
                variant="outlined"
                fullWidth
              />
            ) : (
              character.bestSentences.map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))
            )}
          </Typography>
          {isEditing ? (
            <Button
              variant="contained"
              sx={{ bgcolor: '#2E3B55', marginTop: '10px' }}
              onClick={handleSaveClick}
              className={classes.editButton}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ bgcolor: '#2E3B55', marginTop: '10px' }}
              onClick={handleEditClick}
              className={classes.editButton}
            >
              Edit
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
