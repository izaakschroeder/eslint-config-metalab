var hasPrettier = require('../util/babel').hasPrettier();

module.exports = {
  rules: {
    'metalab/typescript/adjacent-overload-signatures': 'error',
    'metalab/typescript/array-type': 'error',
    'metalab/typescript/ban-types': 'error',
    'metalab/typescript/camelcase': 'error',
    'metalab/typescript/class-name-casing': 'error',
    'metalab/typescript/explicit-function-return-type': 'warn',
    'metalab/typescript/explicit-member-accessibility': 'error',
    'metalab/typescript/indent': hasPrettier ? 'off' : 'error',
    'metalab/typescript/interface-name-prefix': 'error',
    'metalab/typescript/member-delimiter-style': 'error',
    'metalab/typescript/no-angle-bracket-type-assertion': 'error',
    'metalab/typescript/no-array-constructor': 'error',
    'metalab/typescript/no-empty-interface': 'error',
    'metalab/typescript/no-explicit-any': 'warn',
    'metalab/typescript/no-inferrable-types': 'error',
    'metalab/typescript/no-misused-new': 'error',
    'metalab/typescript/no-namespace': 'error',
    'metalab/typescript/no-non-null-assertion': 'error',
    'metalab/typescript/no-object-literal-type-assertion': 'error',
    'metalab/typescript/no-parameter-properties': 'error',
    'metalab/typescript/no-triple-slash-reference': 'error',
    'metalab/typescript/no-unused-vars': [
      2,
      {
        // TODO: Maybe add `caughtErrors: "all"`
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'metalab/typescript/no-use-before-define': 'error',
    'metalab/typescript/no-var-requires': 'error',
    'metalab/typescript/prefer-interface': 'error',
    'metalab/typescript/prefer-namespace-keyword': 'error',
    'metalab/typescript/type-annotation-spacing': 'error',
  },
};
