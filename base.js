var resolve = require('resolve');

module.exports = {
  extends: [
    './legacy.js',
    './rules/babel.js',
    './rules/import.js',
    './rules/modern.js',
  ].map(require.resolve),
};

try {
  resolve.sync('flow-bin', {
    basedir: module.parent.paths[0],
  });
  module.exports.extends.push(require.resolve('./rules/flowtype'));
} catch (err) {
  //
}

try {
  resolve.sync('prettier', {
    basedir: module.parent.paths[0],
  });
  module.exports.extends.push(require.resolve('./rules/prettier'));
} catch (err) {
  //
}
