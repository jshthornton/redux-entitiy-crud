import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, take, fork, select } from 'redux-saga/effects';

// Errors / Exceptions
import { HttpError, NotFoundHttpError, BadRequestHttpError } from 'complication/lib/http';

export function statusChecker(status, entityName) {
  if(status >= 400) {
    throw new HttpError(status, entityName);
  }
}

export function* fetchEntity(config, options) {
  yield put(config.entityActions.fetchRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.url || options.id, options.params);

    statusChecker(response.status, options.entityName);

    yield put(config.entityActions.fetchSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.fetchFailure(err));
  }
};

export function* createEntity(config, options) {
  yield put(config.entityActions.createRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.data, options.params);

    statusChecker(response.status, options.entityName);

    yield put(config.entityActions.createSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.createFailure(err));
  }
};

export function* updateEntity(config, options) {
  yield put(config.entityActions.updateRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.url || options.id, options.data, options.params);

    statusChecker(response.status, options.entityName);

    yield put(config.entityActions.updateSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.updateFailure(err));
  }
};

export function* deleteEntity(config, options) {
  yield put(config.entityActions.deleteRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.url || options.id, options.params);

    statusChecker(response.status, options.entityName);

    yield put(config.entityActions.deleteSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.deleteFailure(err));
  }
};

export function* countEntity(config, options) {
  yield put(config.entityActions.countRequest());

  try {
    const { json, response } = yield call(config.apiFn, options.params, options.url);

    statusChecker(response.status, options.entityName);

    yield put(config.entityActions.countSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.countFailure(err));
  }
};