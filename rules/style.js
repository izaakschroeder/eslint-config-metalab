var hasBabel = require('../util/babel').hasBabel();

module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/eslint/eslint/tree/master/docs/rules
  rules: {
    // Although tabs make more sense semantically, spaces are just more
    // pragmatic for now. They're always consistent across all platforms and
    // editors.
    // http://eslint.org/docs/rules/indent
    // http://programmers.stackexchange.com/questions/57
    'indent': [2, 2],

    // Arrow functions can omit parentheses when they have exactly one
    // parameter. In all other cases the parameter(s) must be wrapped in
    // parentheses. This enforces the consistency.
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [2, 'always'],

    // The one true brace style. (That's actually what it's called).
    // http://eslint.org/docs/rules/brace-style
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    // Single quotes are faster to type and seem to be a fairly general
    // convention in the JS community.
    // http://eslint.org/docs/rules/quotes
    'quotes': [2, 'single', 'avoid-escape'],

    // Enforce case guidelines used in Javascript. No variables_like_this or
    // VariablesLikeThis. Thoughts about properties: use an eslint ignore
    // block to marshal bad properties from APIs like foo_bar into foorBar.
    // AirBnB is less strict in this regard.
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 2,

    // Spacing around commas improve readability of a list of items.
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],

    // Using `first` just plain looks weird.
    // http://eslint.org/docs/rules/comma-style
    'comma-style': [2, 'last'],

    // Just convention for a lot of tools; git in particular.
    // http://eslint.org/docs/rules/eol-last
    // http://stackoverflow.com/questions/729692
    'eol-last': 2,

    // Having function names can help debuggability, but with good stack traces
    // and source maps this isn't really an issue.
    // http://eslint.org/docs/rules/func-names
    'func-names': 0,

    // Mostly here to ensure consistency and avoid scope-hoisting. Either way
    // is viable however. Not enforcing this because their are advantages to
    // using both styles.
    // http://eslint.org/docs/rules/func-style
    'func-style': 0,

    // Things look nice "{like: this}" and not "{like:this}".
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // To be consistent with `array-bracket-spacing`.
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [2, 'never'],

    // To be consistent with `object-curly-spacing`.
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [2, 'never'],

    // 80 column max in order to fit multiple panes on a screen. This is also
    // the traditional column count and should work well with a large variety
    // of editors.
    // http://eslint.org/docs/rules/max-len
    'max-len': [2, 80, 2],

    // Since constructor functions are just regular functions, the only defining
    // characteristic is that new is being used as part of the call. Native
    // JavaScript functions begin with an uppercase letter to distinguish those
    // functions that are to be used as constructors from functions that are
    // not. We recommend following this pattern to more easily determine which
    // functions are to be used as constructors.
    // http://eslint.org/docs/rules/new-cap
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],

    // Prevent pointlessly nested if statements because they're harder to read.
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 2,

    // Who would do this? Honestly.
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': [2, true],

    // Keep things clean by avoiding unnecessary spacing.
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [2, {max: 1}],

    // Nested ternaries are just plain confusing. Avoiding them keeps the
    // code readable.
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 2,

    // Prefer concise object literal syntax `{ }`.
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 2,

    // Don't allow people to do silly looking things like: `foo (a, b)`. They
    // should look like `foo(a, b)`.
    // http://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 2,

    // Sometimes in the course of editing files, you can end up with extra
    // whitespace at the end of lines. These whitespace differences can be
    // picked up by source control systems and flagged as diffs, causing
    // frustration for developers.
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2,

    // http://eslint.org/docs/rules/no-extra-parens
    // https://github.com/yannickcr/eslint-plugin-react/issues/86
    'no-extra-parens': 0,

    // There are no such thing as "private" properties. Use closure
    // variables if you really need isolation.
    // TODO: Revisit this rule.
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,

    // A little more verbose, but is cleaner and more clear.
    // http://eslint.org/docs/rules/one-var
    'one-var': [2, 'never'],

    // Concise, consistent.
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [2, 'never'],

    // Treat ASI as if it didn't exist and always include semicolons manually.
    // The rationale is that it's easier to always include semicolons than to
    // try to remember when they are or are not required, and thus decreases the
    // possibility of introducing an error. This isn't always the case, but good
    // enough for the majority of cases.
    // http://eslint.org/docs/rules/semi
    'semi': [2, 'always'],

    // Ensure consistency and improve readability. Don't allow silly things like
    // `for(var foo = 1;foo < 4;++i)`. Instead: `for(var foo = 1; foo < 4; ++i)`
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],

    // Enforce whitespace for visual clarity.
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 2,

    // Enforce whitespace for visual clarity.
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 2,

    // Enforce whitespace for visual clarity.
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
      },
    ],

    // Enforce whitespace for visual clarity.
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 2,

    // Enforce whitespace for visual clarity.
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 2,

    // Searching a file for `this` will pickup `_this` but not `self`.
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': [2, '_this'],
  },
};

if (hasBabel) {
  // Copy existing config to babel variants.
  module.exports.rules['metalab/babel/object-curly-spacing'] =
    module.exports.rules['object-curly-spacing'];
  // Disable non-babel variants.
  module.exports.rules['object-curly-spacing'] = 0;
}
