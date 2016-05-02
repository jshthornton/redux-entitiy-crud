import { createAction } from 'redux-actions';
import _ from 'lodash';

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

export const generateActions = (actionNamePrefix, actionTypePrefix, variations) => {
  if(variations == null) {
    variations = ['', 'request', 'success', 'failure'];
  }

  return _.reduce(variations, (result, variation) => {
    // Make the function name (action name)
    const fnName = generateFunctionName(actionNamePrefix, variation);

    // Make the action type
    const type = generateActionType(actionTypePrefix, actionNamePrefix, variation);

    // Make the action
    result[fnName] = createAction(type);
    result[type] = type;

    return result;
  }, {});
};