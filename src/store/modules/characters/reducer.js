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

type State = {
  +timestamp: number,
  +publicKey: string,
  +hash: string,
  +characters: Character[],
  +comics: Comic[],
  +characterDetails: Character,
};

type Action = {
  type: string,
  payload: State,
};

const INITIAL_STATE = {
  characters: [],
  timestamp: 0,
  publicKey: '',
  hash: '',
  comics: [],
  characterDetails: {},
};

const characters = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    // case '@characters/LOAD_REQUEST':
    //   console.log('state - action load request');
    //   console.log(state);
    //   console.log(action);
    //   return {
    //     ...state,
    //     // movies: action.payload.data,
    //   };
    case '@characters/LOAD_SUCCESS':
      console.log('action load success');
      console.log(action);
      // console.log(action.payload.characters);
      return {
        ...state,
        characters: action.payload.characters,
        timestamp: action.payload.timestamp,
        publicKey: action.payload.publicKey,
        hash: action.payload.hash,
      };
    case '@characters/LOAD_UPDATE_SUCCESS':
      // console.log('state - action load updates success');
      // console.log(state);
      // console.log(action);
      return {
        ...state,
        characters: action.payload.characters,
        // timestamp: action.payload.timestamp,
        // publicKey: action.payload.publicKey,
        // hash: action.payload.hash,
      };
    case '@characters/LOAD_COMICS_SUCCESS':
      // console.log('state - action LOAD_COMICS_SUCCESS');
      // console.log(state);
      // console.log(action.payload.comics);

      return {
        ...state,
        characterDetails: action.payload.characterDetails,
        comics: action.payload.comics,
      };
    default:
      return state;
  }
};

export default characters;
