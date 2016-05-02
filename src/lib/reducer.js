import _ from 'lodash';

export const create = (state, action, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  if(_.isArray(action.payload) === true) {
    return _.assign({}, state, _.keyBy(action.payload, idKey));
  }

  return _.assign({}, state, { [action.payload.id]: action.payload });
};

export const read = (state, action, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  if(_.isArray(action.payload) === true) {
    return _.assign({}, state, _.keyBy(action.payload, idKey));
  }

  return _.assign({}, state, { [action.payload.id]: action.payload });
};

export const update = (state, action, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  if(_.isArray(action.payload) === true) {
    return _.merge({}, state, _.keyBy(action.payload, idKey));
  }

  return _.merge({}, state, { [action.payload.id]: action.payload });
};

export const del = (state, action, idKey = 'id') => {
  if(action.error === true) {
    return state;
  }

  if(_.isArray(action.payload) === true) {
    return _.omit(_.clone(state), _.map(action.payload, idKey));
  }

  return _.omit(_.clone(state), action.payload.id);
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