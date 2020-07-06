// @flow
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
  characters: any[],
  timestamp: any,
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
export function charactersLoadUpdateSuccess(characters: any[]) {
  return {
    type: '@characters/LOAD_UPDATE_SUCCESS',
    payload: {
      characters,
    },
  };
}
export function charactersLoadComicsSuccess(
  characterDetails: any,
  comics: any[],
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
