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
    // console.log('saga request');
    // console.log(privateKey);
    // console.log(publicKey);

    const timestamp = Math.floor(Date.now() / 1000);

    // const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    // const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    const hash = md5(timestamp + privateKey + publicKey);

    const response = yield call(
      api.get,
      `characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14&offset=0`,
    );

    const { results, total } = response.data.data;

    console.log('saga data FIRST');
    console.log(total);
    // console.log(results);
    yield put(
      charactersLoadSuccess(results, timestamp, publicKey, hash, total),
    );
  } catch (error) {
    // yield put(charactersLoadFailure());
    window.alert('Public or private key invalidates!');
    console.log('error load request ');
    console.log(error);
  }
}

function* getUpdateCharacters({ payload: { quantityPage } }) {
  try {
    // console.log('saga request');
    // console.log(privateKey);
    // console.log(publicKey);
    const { timestamp, publicKey, hash, totalCharacters } = yield select(
      state => state.characters,
    );
    console.log('totalCharacters');
    console.log(totalCharacters);
    console.log('quantityPage');
    console.log(quantityPage);

    // TESTE
    // const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    // const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    // const timestamp = Math.floor(Date.now() / 1000);
    // const hash = md5(timestamp + privateKey + publicKey);
    if (quantityPage < 0 || quantityPage > totalCharacters) {
      console.log('VALIDAÇÃO');
      console.log(quantityPage);
      console.log(totalCharacters);
      window.alert('Invalid page number');
      yield put(charactersFailure());
      return;
    }

    const response = yield call(
      api.get,
      `characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14&offset=${quantityPage}`,
    );

    console.log(response);

    const { results } = response.data.data;

    const newActualPage = quantityPage / 14;

    // console.log('saga data update');
    // console.log(response);
    // console.log(results);
    yield put(charactersLoadUpdateSuccess(results, newActualPage));
  } catch (error) {
    // yield put(charactersLoadFailure());
    window.alert('Public or private key invalidates!');
    console.log('error load request ');
    console.log(error);
  }
}

function* getUpdateComics({ payload: { characterId, quantityPage = 0 } }) {
  try {
    // console.log('saga request');
    // console.log(privateKey);
    // console.log(publicKey);
    const {
      timestamp,
      publicKey,
      hash,
      actualPage,
      totalComics,
    } = yield select(state => state.characters);
    console.log('quantityPage');
    console.log(quantityPage);

    // TESTE
    // const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    // const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    // const timestamp = Math.floor(Date.now() / 1000);
    // const hash = md5(timestamp + privateKey + publicKey);

    if (quantityPage < 0 || quantityPage > totalComics) {
      console.log('VALIDAÇÃO');
      console.log(quantityPage);
      // console.log(totalCharacters);
      window.alert('Invalid page number');
      yield put(charactersFailure());
      return;
    }

    const response = yield call(
      api.get,
      `characters/${characterId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14&offset=${quantityPage}`,
    );

    console.log(response);

    const { results } = response.data.data;

    if (results.length === 0) {
      console.log('VALIDAÇÃO 2');
      console.log(quantityPage);
      window.alert('Invalid page number');
      yield put(charactersFailure());
      return;
    }

    // console.log('saga data update');
    // console.log(response);
    // console.log(results);
    if (results.length === 0) {
      console.log('VALIDAÇÃO 2');
      console.log(quantityPage);
      window.alert('Invalid page number');
      yield put(charactersLoadComicsUpdateSuccess(results, actualPage));
      return;
    }
    const newActualPage = quantityPage / 14;
    yield put(charactersLoadComicsUpdateSuccess(results, newActualPage));
  } catch (error) {
    // yield put(charactersLoadFailure());
    window.alert('Public or private key invalidates!');
    console.log('error load request ');
    console.log(error);
  }
}

function* getCharacterById({ payload: { characterId } }) {
  try {
    // const { timestamp, publicKey, hash, characters } = yield select(
    //   state => state.characters,
    // );
    const { characters } = yield select(state => state.characters);

    // console.log('all characters');
    // console.log(characters);

    const character = characters.find(item => characterId === item.id);

    // console.log('character found');
    // console.log(character);

    // TESTE
    const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);

    const response = yield call(
      api.get,
      `characters/${characterId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=14`,
    );

    const { results, total } = response.data.data;

    console.log('saga data comics');
    console.log(response);
    // console.log(results);
    yield put(charactersLoadComicsSuccess(character, results, 0, total));
  } catch (error) {
    // yield put(charactersLoadFailure());
    window.alert('Public or private key invalidates!');
    console.log('error load request ');
    console.log(error);
  }
}

// qual action ouvir e qual método disparar
export default all([
  takeLatest('@characters/LOAD_REQUEST', getCharacters),
  takeLatest('@characters/LOAD_UPDATED', getUpdateCharacters),
  takeLatest('@characters/LOAD_UPDATED_COMICS', getUpdateComics),
  takeLatest('@characters/LOAD_COMICS_REQUEST', getCharacterById),
]);
