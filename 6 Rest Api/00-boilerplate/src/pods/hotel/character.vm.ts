export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  /* origin: { name: string }; */
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  /* origin: {name: ''} */
});
