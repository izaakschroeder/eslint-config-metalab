module.exports = {
  plugins: [
    'filenames',
  ],

  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/selaux/eslint-plugin-filenames
  rules: {
    // Enforce the idiomatic kebab-case instead of snake_case or PascalCase.
    // Also prevents cross-platform casing issues.
    // https://github.com/selaux/eslint-plugin-filenames
    'filenames/match-regex': [2, '^[a-z0-9.-]+$', true],
    'filenames/match-exported': 2,
    'filenames/no-index': 0,
  },
};
