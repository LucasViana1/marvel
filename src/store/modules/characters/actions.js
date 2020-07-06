// @flow
type Character = {
  id: number,
  description: string,
  name: string,
  modified: Date,
  thumbnail: {
    path: string,
    extension: string,
  },
};
type Comic = {
  title: string,
  description: string,
  issueNumber: number,
  thumbnail: {
    path: string,
    extension: string,
  },
};

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
) {
  return {
    type: '@characters/LOAD_SUCCESS',
    payload: {
      characters,
      timestamp,
      publicKey,
      hash,
    },
  };
}
export function charactersLoadUpdateSuccess(characters: Character[]) {
  return {
    type: '@characters/LOAD_UPDATE_SUCCESS',
    payload: {
      characters,
    },
  };
}

export function charactersLoadComicsSuccess(
  characterDetails: Character,
  comics: Comic[],
) {
  return {
    type: '@characters/LOAD_COMICS_SUCCESS',
    payload: {
      characterDetails,
      comics,
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
