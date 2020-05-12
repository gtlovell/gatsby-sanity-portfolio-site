import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';
import project from './project';
import author from './author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([project, author]),
});
