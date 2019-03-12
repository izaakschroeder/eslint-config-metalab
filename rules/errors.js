var hasTypescript = require('../util/babel').hasTypescript();

module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/eslint/eslint/tree/master/docs/rules
  rules: {
    // ----------------------------------------------------------------------
    // Possible errors
    // ----------------------------------------------------------------------

    // Constructors of derived classes must call super(). Constructors of non-
    // derived classes must not call super(). If this is not observed, the
    // javascript engine will raise a runtime error. Having this rule allows
    // for avoiding runtime errors by checking for this case early on.
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 2,

    // While this looks a bit weird, its purpose is to make git diffs actually
    // make sense. Without dangling commas diffs include unnecessary lines,
    // sometimes making it hard to tell which lines were intended to be changed
    // and making `git blame` mark one line with a possibly unrelated commit.
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'always-multiline'],

    // Arrow functions (=>) are similar in syntax to some comparison operators
    // (>, <, <=, and >=). This rule warns against using the arrow function
    // syntax in places where a condition is expected. After seeing this in
    // action I don't really like having it on; it doesn't really catch anything
    // I've written and makes code more bloated.
    'no-arrow-condition': 0,

    // In conditional statements, it is very easy to mistype a comparison
    // operator (such as ==) as an assignment operator (such as =). This
    // prevents those common mistakes and ensures assignment is actually
    // intentional.
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [2, 'except-parens'],

    // While fine for debugging, (or in exceptional cases like as a plugin to a
    // logging mechanism), console output generally does not belong in
    // production code.
    // http://eslint.org/docs/rules/no-console
    'no-console': 2,

    // For the same reason console logging does not belong in production code,
    // neither does `debugger`. A library or app consumer should never be
    // dropped into the JS debugger for any reason.
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 2,

    // The `alert` dialog is just overall terrible. So prevent people from using
    // it. They should be using a modal that fits the UX of their app.
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 2,

    // Comparing a literal expression in a condition is usually a typo or
    // development trigger for a specific behavior. e.g. `if (false) ...`
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 2,

    // Creating objects with duplicate keys in objects can cause unexpected
    // behavior in your application. So prevent this esoteric case.
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 2,

    // A switch statements with duplicate case labels is normally an indication
    // of a programmer error, since (in combination with `no-fallthrough`) only
    // the first matching case will get executed creating dead code if you have
    // duplicates.
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 2,

    // Empty block statements are usually an indicator of an error, or at the
    // very least, an indicator that some refactoring is needed.
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 2,

    // When an error is caught using a `catch` block, it's possible to
    // accidentally (or purposely) overwrite the reference to the error. This
    // makes it impossible to track the error from that point on.
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 2,

    // No point in having unnecessary typecasts.
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 0,

    // No point in cluttering up the code with pointless semi-colons.
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 2,

    // Overwriting/reassigning a function written as a FunctionDeclaration is
    // often indicative of a mistake or issue.
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 2,

    // In JavaScript, prior to ES6, a function declaration is only allowed in
    // the first level of a program or the body of another function, though
    // parsers sometimes erroneously accept them elsewhere. This only applies to
    // function declarations; named or anonymous function expressions can occur
    // anywhere an expression is permitted.
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 2,

    // Validates string arguments passed to the RegExp constructor. Seems like
    // a sensible, extra safeguard to have.
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 2,

    // Invalid or irregular whitespace causes issues with ECMAScript 5 parsers
    // and also makes code harder to debug in a similar nature to mixed tabs and
    // spaces. Invalid whitespace is any whitespace character that is not a
    // normal tab or space.
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 2,

    // ECMAScript provides several global objects that are intended to be used
    // as-is. Some of these objects look as if they could be constructors due
    // their capitalization (such as Math and JSON) but will throw an error if
    // you try to execute them as functions. So catch these errors early on.
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 2,

    // Properties that are not valid identifiers need to be quoted. For example
    // the property `foo-bar` needs quotes, while `fooBar` does not. Generally
    // quotes are extra and unecessary since the majority of properties should
    // be camel-cased. However, sometimes you need those odd-named properties.
    // http://eslint.org/docs/rules/quote-props
    'quote-props': [2, 'as-needed'],

    // Sparse arrays contain empty slots, most frequently due to multiple commas
    // being used in an array literal. Did the developer intend for there to be
    // an empty spot in the middle of the array? Or is it a typo? The confusion
    // around sparse arrays defined in this manner is enough that it's
    // recommended to avoid using them unless you are certain that they are
    // useful in your code.
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 2,

    // Any reference to an undeclared variable causes an error. This helps you
    // locate potential ReferenceErrors resulting from misspellings of variable
    // and parameter names, or accidental implicit globals. Access to globals
    // can be added via a /* global foo */ comment.
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 2,

    // A number of statements unconditionally exit a block of code. Any
    // statements after that will not be executed and may be an error. The
    // presence of unreachable code is usually a sign of a coding error.
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 2,

    // Variables that are declared and not used anywhere in the code are most
    // likely an error due to incomplete refactoring. Such variables take up
    // space in the code and can lead to confusion by readers.
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      2,
      {
        // TODO: Maybe add `caughtErrors: "all"`
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // In JavaScript, prior to ES6, variable and function declarations are
    // hoisted to the top of a scope, so it's possible to use identifiers before
    // their formal declarations in code. This can be confusing and some believe
    // it is best to always declare variables and functions before using them.
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 2,

    // As par for the JavaScript course, NaN is one of the most confusing,
    // inconsistent literals in existence. It's part of the IEEE floating
    // point standard, but it's interactions in JavaScript are odd. NaN is not
    // equal to anything, including itself. e.g. `5/0 === NaN` is false, even
    // though 5/0 is NaN. JavaScript. Even `isNaN` is not perfect, but it is
    // slightly less confusing. `isNaN(5/0)` is true, but `isNaN("NaN")` is
    // also true. This rule is here just to guard against simple errors, but
    // does not cover the scope of the garbage that is JS NaN. See below links
    // for further discussion.
    // http://eslint.org/docs/rules/use-isnan
    // http://stackoverflow.com/questions/25176459
    'use-isnan': 2,

    // This rule aims to reduce the usage of variables outside of their binding
    // context and emulate traditional block scope from other languages. This is
    // to help newcomers to the language avoid difficult bugs with variable
    // hoisting.
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 2,
  },
};

if (hasTypescript) {
  module.exports.rules['no-unused-vars'] = 0;
}
