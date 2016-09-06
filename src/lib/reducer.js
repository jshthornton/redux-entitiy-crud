import _ from 'lodash';

export const create = (state, action, path, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  return _.assign({}, state,  _.get(action, path));
};

export const read = (state, action, path, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  return _.assign({}, state,  _.get(action, path));
};

export const update = (state, action, path, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  return _.assign({}, state,  _.get(action, path));
};

export const del = (state, action, path, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  return _.omit(_.clone(state), _.get(action, path)[idKey]);
};

const reducer = (reducer, config) => {
  if(!_.isArray(config.create)) {
    config.create = [config.create];
  }

  if(!_.isArray(config.read)) {
    config.read = [config.read];
  }

  if(!_.isArray(config.update)) {
    config.update = [config.update];
  }

  if(!_.isArray(config.delete)) {
    config.delete = [config.delete];
  }

  return (state, action) => {

    if(state == null) {
      return reducer(state, action);
    }

    if(_.includes(config.create, action.type)) {
      return create(state, action, config.path, config.idKey);
    }

    if(_.includes(config.read, action.type)) {
      return read(state, action, config.path, config.idKey);
    }

    if(_.includes(config.update, action.type)) {
      return update(state, action, config.path, config.idKey);
    }

    if(_.includes(config.delete, action.type)) {
      return del(state, action, config.path, config.idKey);
    }

    return reducer(state, action);
  };
};

export default reducer;