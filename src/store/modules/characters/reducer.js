// @flow
const INITIAL_STATE = {
  characters: [],
  timestamp: '',
  publicKey: '',
  hash: '',
  comics: [],
  characterDetails: {},
};

const characters: any = (state = INITIAL_STATE, action) => {
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
      console.log('state - action load success');
      console.log(state);
      console.log(action);
      return {
        ...state,
        characters: action.payload.characters,
        timestamp: action.payload.timestamp,
        publicKey: action.payload.publicKey,
        hash: action.payload.hash,
      };
    case '@characters/LOAD_UPDATE_SUCCESS':
      console.log('state - action load updates success');
      console.log(state);
      console.log(action);
      return {
        ...state,
        characters: action.payload.characters,
        // timestamp: action.payload.timestamp,
        // publicKey: action.payload.publicKey,
        // hash: action.payload.hash,
      };
    case '@characters/LOAD_COMICS_SUCCESS':
      console.log('state - action LOAD_COMICS_SUCCESS');
      console.log(state);
      console.log(action);
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
