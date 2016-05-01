import { normalize, arrayOf } from 'normalizr';

const stdParser = (schema, data, options) => {
  if(_.isArray(data)) {
    return normalize(data, arrayOf(schema));
  }

  return normalize(data, schema);
};

export default stdParser;