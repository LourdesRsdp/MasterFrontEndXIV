import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  image: character.image,
  origin: character.origin.name,
  bestSentences: character.bestSentences
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
(({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  image: character.image,
  origin: character.origin,
  bestSentences: character.bestSentences,
} as unknown) as apiModel.Character);
