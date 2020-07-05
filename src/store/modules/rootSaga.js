import { all } from 'redux-saga/effects';

import characters from './characters/sagas';

export default function* rootSaga() {
  return yield all([characters]);
}
