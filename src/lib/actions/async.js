import { createAction } from 'redux-actions';
import _ from 'lodash';

// login -> { login, loginRequest, loginSuccess, ... }
// && { LOGIN, LOGIN_REQUEST , ... }

export const generateFunctionName = (actionNamePrefix, variant) => {
  return actionNamePrefix + _.capitalize(variant)
};

export const generateActionType = (actionTypePrefix, actionNamePrefix, variant) => {
  return _([actionTypePrefix, actionNamePrefix])
    .tap(array => {
      if(variant.length > 0) {
        array.push(variant);
      }
    })
    .map(_.snakeCase)
    .thru(value => _.join(value, '_'))
    .thru(_.toUpper)
    .value();
};
