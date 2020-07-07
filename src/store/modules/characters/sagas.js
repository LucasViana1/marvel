import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import md5 from 'md5';

import api from '../../../services/api';
import {
  charactersLoadSuccess,
  charactersLoadUpdateSuccess,
  charactersLoadComicsSuccess,
  charactersLoadComicsUpdateSuccess,
  charactersFailure,
} from './actions';

function* getCharacters({ payload: { privateKey, publicKey } }) {
  try {
    const timestamp = Math.floor(Date.now() / 1000);

    const hash = md5(timestamp + privateKey + publicKey);

    const response = yield call(
      api.get,
      `characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14&offset=0`,
    );

    const { results, total } = response.data.data;

    yield put(
      charactersLoadSuccess(results, timestamp, publicKey, hash, total),
    );
  } catch (error) {
    window.alert('Public or private key invalidates!');
    yield put(charactersFailure());
  }
}

function* getUpdateCharacters({ payload: { quantityPage } }) {
  try {
    const { timestamp, publicKey, hash, totalCharacters } = yield select(
      state => state.characters,
    );

    if (quantityPage < 0 || quantityPage > totalCharacters) {
      window.alert('Invalid page number');
      yield put(charactersFailure());
      return;
    }

    const response = yield call(
      api.get,
      `characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14&offset=${quantityPage}`,
    );

    const { results } = response.data.data;

    const newActualPage = quantityPage / 14;

    yield put(charactersLoadUpdateSuccess(results, newActualPage));
  } catch (error) {
    // yield put(charactersLoadFailure());
    window.alert('Public or private key invalidates!');
    yield put(charactersFailure());
  }
}

function* getUpdateComics({ payload: { characterId, quantityPage = 0 } }) {
  try {
    const {
      timestamp,
      publicKey,
      hash,
      actualPage,
      totalComics,
    } = yield select(state => state.characters);

    if (quantityPage < 0 || quantityPage > totalComics) {
      window.alert('Invalid page number');
      yield put(charactersFailure());
      return;
    }

    const response = yield call(
      api.get,
      `characters/${characterId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14&offset=${quantityPage}`,
    );

    const { results } = response.data.data;

    if (results.length === 0) {
      window.alert('Invalid page number');
      yield put(charactersFailure());
      return;
    }

    if (results.length === 0) {
      window.alert('Invalid page number');
      yield put(charactersLoadComicsUpdateSuccess(results, actualPage));
      return;
    }
    const newActualPage = quantityPage / 14;
    yield put(charactersLoadComicsUpdateSuccess(results, newActualPage));
  } catch (error) {
    window.alert('Public or private key invalidates!');
    yield put(charactersFailure());
  }
}

function* getCharacterById({ payload: { characterId } }) {
  try {
    const { timestamp, publicKey, hash, characters } = yield select(
      state => state.characters,
    );

    const character = characters.find(item => characterId === item.id);

    const response = yield call(
      api.get,
      `characters/${characterId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14`,
    );

    const { results, total } = response.data.data;

    yield put(charactersLoadComicsSuccess(character, results, 0, total));
  } catch (error) {
    window.alert('Public or private key invalidates!');
    yield put(charactersFailure());
  }
}

export default all([
  takeLatest('@characters/LOAD_REQUEST', getCharacters),
  takeLatest('@characters/LOAD_UPDATED', getUpdateCharacters),
  takeLatest('@characters/LOAD_UPDATED_COMICS', getUpdateComics),
  takeLatest('@characters/LOAD_COMICS_REQUEST', getCharacterById),
]);
