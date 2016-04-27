module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/docs.js',
    './rules/errors.js',
    './rules/filenames.js',
    './rules/immutable.js',
    './rules/import.js',
    './rules/style.js',
  ].map(require.resolve),
};
