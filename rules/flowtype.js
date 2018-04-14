module.exports = {
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/gajus/eslint-plugin-flowtype
  rules: {
    'metalab/flowtype/boolean-style': [2, 'boolean'],
    'metalab/flowtype/define-flow-type': 1,
    'metalab/flowtype/delimiter-dangle': 0,
    'metalab/flowtype/generic-spacing': 0,
    'metalab/flowtype/no-types-missing-file-annotation': 2,
    'metalab/flowtype/no-weak-types': 0,
    'metalab/flowtype/require-parameter-type': 0,
    'metalab/flowtype/require-return-type': 0,
    'metalab/flowtype/require-valid-file-annotation': 0,
    'metalab/flowtype/semi': 0,
    'metalab/flowtype/space-after-type-colon': [2, 'always'],
    'metalab/flowtype/space-before-generic-bracket': [2, 'never'],
    'metalab/flowtype/space-before-type-colon': [2, 'never'],
    'metalab/flowtype/type-id-match': 0,
    'metalab/flowtype/union-intersection-spacing': [2, 'always'],
    'metalab/flowtype/use-flow-type': 1,
    'metalab/flowtype/valid-syntax': 1,
  },
};
