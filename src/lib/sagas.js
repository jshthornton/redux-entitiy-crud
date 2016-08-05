import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, take, fork, select } from 'redux-saga/effects';
import _ from 'lodash';

// Errors / Exceptions
import { HttpError, NotFoundHttpError, BadRequestHttpError } from 'complication/lib/http';

export function statusChecker(response, config) {
  const status = response.status;

  if(status >= 400) {
    throw new HttpError(status, config.entityName);
  }
}

export function apiInvoker(config) {
  return () => {
    return config.apiFn({
      url: config.url,
      id: config.id,
      params: config.params,
      data: config.data
    });
  };
}

export async function parseJSON(response) {
  return response.json();
}

export function* apiWrapper(config) {
  config = _.assign({}, {
    apiInvoker: apiInvoker,
    bodyParser: parseJSON,
    responseChecker: statusChecker
  }, config);

  yield put(config.actions.request({
    url: config.url,
    id: config.id
  }));

  try {
    const apiFn = yield call(config.apiInvoker, config);
    const { response } = yield call(apiFn);
    const body = yield call(config.bodyParser, response);

    yield call(config.responseChecker, response, config);

    const parsedBody = yield call(config.parser(body, config.parserOptions));

    yield put(config.actions.success(parsedBody));
  } catch(err) {
    yield put(config.actions.failure(err));
  }
}

export function runtimeApiWrapper(config) {
  return (overideConfig) => {
    const mergedConfig = _.assign({}, config, overideConfig);

    return apiWrapper(mergedConfig);
  };
}