import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import md5 from 'md5';

import api from '../../../services/api';
import {
  charactersLoadSuccess,
  charactersLoadUpdateSuccess,
  charactersLoadComicsSuccess,
} from './actions';

function* getCharacters({ payload: { privateKey, publicKey } }) {
  try {
    console.log('saga request');
    console.log(privateKey);
    console.log(publicKey);

    const timestamp = Math.floor(Date.now() / 1000);
    // const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    // const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    const hash = md5(timestamp + privateKey + publicKey);

    const response = yield call(
      api.get,
      `characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10&offset=0`,
    );

    const { results } = response.data.data;

    console.log('saga data');
    console.log(response);
    console.log(results);
    yield put(charactersLoadSuccess(results, timestamp, publicKey, hash));
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
    const { timestamp, publicKey, hash } = yield select(state => state);

    // TESTE
    // const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    // const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    // const timestamp = Math.floor(Date.now() / 1000);
    // const hash = md5(timestamp + privateKey + publicKey);

    const response = yield call(
      api.get,
      `characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10&offset=${quantityPage}`,
    );

    const { results } = response.data.data;

    console.log('saga data update');
    // console.log(response);
    console.log(results);
    yield put(charactersLoadUpdateSuccess(results));
  } catch (error) {
    // yield put(charactersLoadFailure());
    window.alert('Public or private key invalidates!');
    console.log('error load request ');
    console.log(error);
  }
}

function* getCharacterComics({ payload: { characterId } }) {
  try {
    // console.log('saga request');
    // console.log(privateKey);
    // console.log(publicKey);
    // const { timestamp, publicKey, hash } = yield select(state => state);

    // TESTE
    const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp + privateKey + publicKey);

    const response = yield call(
      api.get,
      `characters/${characterId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
    );

    const { results } = response.data.data;

    console.log('saga data comics');
    // console.log(response);
    console.log(results);
    yield put(charactersLoadComicsSuccess(results));
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
  takeLatest('@characters/LOAD_COMICS_REQUEST', getCharacterComics),
]);
