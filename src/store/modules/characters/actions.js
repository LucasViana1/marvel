// @flow

import { Character, Comic } from './types';

export function charactersLoadRequest(privateKey: string, publicKey: string) {
  return {
    type: '@characters/LOAD_REQUEST',
    payload: {
      privateKey,
      publicKey,
    },
  };
}
export function loadCharacterById(characterId: number) {
  return {
    type: '@characters/LOAD_COMICS_REQUEST',
    payload: {
      characterId,
    },
  };
}

export function charactersLoadSuccess(
  characters: Character[],
  timestamp: number,
  publicKey: string,
  hash: string,
  totalCharacters: number,
) {
  return {
    type: '@characters/LOAD_SUCCESS',
    payload: {
      characters,
      timestamp,
      publicKey,
      hash,
      totalCharacters,
    },
  };
}
export function charactersLoadUpdateSuccess(
  characters: Character[],
  actualPage: number,
) {
  return {
    type: '@characters/LOAD_UPDATE_SUCCESS',
    payload: {
      characters,
      actualPage,
    },
  };
}
export function charactersLoadComicsUpdateSuccess(
  comics: Comic[],
  actualPage: number,
) {
  return {
    type: '@characters/LOAD_COMICS_UPDATE_SUCCESS',
    payload: {
      comics,
      actualPage,
    },
  };
}

export function charactersLoadComicsSuccess(
  characterDetails: Character,
  comics: Comic[],
  actualPage: number,
  totalComics: number,
) {
  return {
    type: '@characters/LOAD_COMICS_SUCCESS',
    payload: {
      characterDetails,
      comics,
      actualPage,
      totalComics,
    },
  };
}

export function charactersLoadUpdated(quantityPage: number) {
  return {
    type: '@characters/LOAD_UPDATED',
    payload: {
      quantityPage,
    },
  };
}
export function charactersComicsLoadUpdated(
  characterId: number,
  quantityPage: number,
) {
  return {
    type: '@characters/LOAD_UPDATED_COMICS',
    payload: {
      quantityPage,
      characterId,
    },
  };
}
export function charactersFailure() {
  return {
    type: '@characters/LOAD_FAILURE',
  };
}
