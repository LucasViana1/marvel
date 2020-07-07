// @flow
export type Character = {
  id: number,
  description: string,
  name: string,
  modified: Date,
  thumbnail: {
    path: string,
    extension: string,
  },
};

export type Comic = {
  title: string,
  description: string,
  issueNumber: number,
  thumbnail: {
    path: string,
    extension: string,
  },
};

export type State = {
  +timestamp: number,
  +publicKey: string,
  +hash: string,
  +characters: Character[],
  +comics: Comic[],
  +characterDetails: Character,
  +actualPage: number,
  +totalCharacters: number,
  +totalComics: number,
  +loading: boolean,
};

export type Action = {
  type: string,
  payload: State,
};
