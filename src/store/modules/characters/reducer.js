// @flow

import { State, Action } from './types';

const INITIAL_STATE = {
  characters: [],
  timestamp: 0,
  publicKey: '',
  hash: '',
  comics: [],
  characterDetails: {},
  actualPage: 0,
  totalCharacters: 0,
  totalComics: 0,
  loading: false,
};

const characters = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case '@characters/LOAD_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case '@characters/LOAD_UPDATED':
      return {
        ...state,
        loading: true,
      };
    case '@characters/LOAD_UPDATED_COMICS':
      return {
        ...state,
        loading: true,
      };
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
        totalCharacters: action.payload.totalCharacters,
        loading: false,
      };
    case '@characters/LOAD_UPDATE_SUCCESS':
      // console.log('state - action load updates success');
      // console.log(state);
      // console.log(action);
      return {
        ...state,
        characters: action.payload.characters,
        actualPage: action.payload.actualPage,
        loading: false,
        // timestamp: action.payload.timestamp,
        // publicKey: action.payload.publicKey,
        // hash: action.payload.hash,
      };
    case '@characters/LOAD_COMICS_UPDATE_SUCCESS':
      // console.log('state - action load updates success');
      // console.log(state);
      // console.log(action);
      return {
        ...state,
        comics: action.payload.comics,
        actualPage: action.payload.actualPage,
        loading: false,
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
        actualPage: action.payload.actualPage,
        totalComics: action.payload.totalComics,
        loading: false,
      };
    case '@characters/LOAD_FAILURE':
      // console.log('state - action LOAD_COMICS_SUCCESS');
      // console.log(state);
      // console.log(action.payload.comics);

      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default characters;
