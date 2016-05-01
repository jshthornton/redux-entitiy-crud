import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, take, fork, select } from 'redux-saga/effects';

// Errors / Exceptions
import { NotFoundHttpError, BadRequestHttpError } from 'complication/lib/http';

export function* fetchEntity(config, options) {
  yield put(config.entityActions.fetchRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.url || options.id, options.params);

    if(response.status === 404) {
      throw new NotFoundHttpError(config.entityName + ' not found');
    }

    if(response.status === 400) {
      throw new BadRequestHttpError(config.entityName + ' bad request');
    }

    yield put(config.entityActions.fetchSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.fetchFailure(err));
  }
};

export function* createEntity(config, options) {
  yield put(config.entityActions.createRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.data, options.params);

    if(response.status === 404) {
      throw new NotFoundHttpError(config.entityName + ' not found');
    }

    if(response.status === 400) {
      throw new BadRequestHttpError(config.entityName + ' bad request');
    }

    yield put(config.entityActions.createSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.createFailure(err));
  }
};

export function* updateEntity(config, options) {
  yield put(config.entityActions.updateRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.url || options.id, options.data, options.params);

    if(response.status === 404) {
      throw new NotFoundHttpError(config.entityName + ' not found');
    }

    if(response.status === 400) {
      throw new BadRequestHttpError(config.entityName + ' bad request');
    }

    yield put(config.entityActions.updateSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.updateFailure(err));
  }
};

export function* deleteEntity(config, options) {
  yield put(config.entityActions.deleteRequest(options.url || options.id));

  try {
    const { json, response } = yield call(config.apiFn, options.url || options.id, options.params);

    if(response.status === 404) {
      throw new NotFoundHttpError(config.entityName + ' not found');
    }

    if(response.status === 400) {
      throw new BadRequestHttpError(config.entityName + ' bad request');
    }

    yield put(config.entityActions.deleteSuccess(config.parser(json, options.parserOptions)));
  } catch(err) {
    yield put(config.entityActions.deleteFailure(err));
  }
};