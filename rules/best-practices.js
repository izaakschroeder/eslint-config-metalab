var hasBabel = require('../util/babel').hasBabel();

module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/eslint/eslint/tree/master/docs/rules
  rules: {
    // ----------------------------------------------------------------------
    // Best practices
    // ----------------------------------------------------------------------

    // This rule is aimed at ensuring all return statements either specify a
    // value or don't specify a value. Since JavaScript offers no typing
    // it is impossible to check a function actually returns what it intends to.
    // This is a helping hand in the right direction.
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 2,

    // It is considered by many to be best practice to never omit curly braces
    // around blocks, even when they are optional, because it can lead to bugs
    // and reduces code clarity.
    // http://eslint.org/docs/rules/curly
    'curly': [2, 'multi-line'],

    // Enforce a reasonable cap on functions spiralling out of control
    // with many branches.
    // http://eslint.org/docs/rules/complexity
    'complexity': [2, 10],

    // If you have a switch block you should always cover all possible cases.
    // Since Javascript has a bad "type system" we have to have a default case
    // to check everything.
    // http://eslint.org/docs/rules/default-case
    'default-case': 2,

    // Dot notation is often preferred because it is easier to read, less
    // verbose, and works better with aggressive JavaScript minimizers.
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      2,
      {
        allowKeywords: true,
      },
    ],

    // JavaScript "types" to the rescue again! `==` offers incredibly
    // inconsistent checking resulting in hard-to-find errors.
    // http://eslint.org/docs/rules/eqeqeq
    // http://stackoverflow.com/questions/359494
    'eqeqeq': 2,

    // Looping over objects with a for in loop will include properties that are
    // inherited through the prototype chain. This behavior can lead to
    // unexpected items in your for loop. You can use `for ... of` and/or
    // `Object.getOwnPropertyNames` or `Object.keys`.
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 2,

    // The use of arguments.caller and arguments.callee make several code
    // optimizations impossible. They have been deprecated in future versions of
    // JavaScript. May as well force good choices on the code.
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 2,

    // Save some bytes! Also prevent some possible dead code paths.
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 2,

    // Comparing to null without a type-checking operator (== or !=), can have
    // unintended results as the comparison will evaluate to true when comparing
    // to not just a null, but also an undefined value. This isn't a big deal
    // with `eqeqeq` on, so it's more here for consistency.
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 2,

    // The devil of all functions. `eval` is terrible for thousands of reasons.
    // http://eslint.org/docs/rules/no-eval
    // http://stackoverflow.com/questions/86513
    'no-eval': 2,

    // Almost always results in nasty, hard to find bugs. Changing native/shared
    // code can mean changes in expected behavior in other places.
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 2,

    // Sometimes during the course of code maintenance, the this value is
    // removed from the function body. In that case, you can end up with a call
    //  to bind() that doesn't accomplish anything. So save the performance.
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 2,

    // The switch statement in JavaScript is one of the more error-prone
    // constructs of the language thanks in part to the ability to "fall
    // through" from one case to the next. More often than not this is NOT
    // what you want, so explicitly disable it.
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 2,

    // Don't allow people to do silly things like "1." when they mean "1.0".
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 2,

    // Attempt to guard against people using `this` when they shouldn't be. For
    // cases which can result in undefined runtime behavior the author can mark
    // the consumption of `this` in documentation and that will pass the rule.
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 2,

    // There are some other ways to pass a string and have it interpreted as
    // code. Disable them for the same reasons as `eval`.
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 2,

    // In JavaScript, prior to ES6, standalone code blocks delimited by curly
    // braces do not create a new scope and have no use.
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 2,

    // Writing functions within loops tends to result in errors due to the way
    // the function creates a closure around the loop. If functions are needed
    // in loops, set the iterator variable with `let` instead of `var` or use an
    //  iterator function like `forEach`.
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 2,

    // 'Magic numbers' are numbers that occur multiple time in code without an
    // explicit meaning. They should preferably be replaced by named constants.
    // However, after some usage, it appears this is best enforced by developer
    // sensibilities – there are simply too many cases where the context makes
    // the given value obvious and constants are not warranted.
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 0,

    // It's possible to create multiline strings in JavaScript by using a slash
    // before a newline. Use template strings instead.
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 2,

    // Reports an error when they encounter an attempt to assign a value to
    // built-in native object. There should be no valid reason anyone is trying
    // to assign values to built-ins.
    // http://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 2,

    // Don't use `new` for side-effects. Since `new` always creates an object
    // instances, not consuming that object is wasteful and generally indicative
    // of programmer error. Sometimes this is handy in testing and in those
    // cases exceptions can be made.
    // http://eslint.org/docs/rules/no-new
    'no-new': 2,

    // It's possible to create functions in JavaScript using the Function
    // constructor. This is considered by many to be a bad practice as it
    // increases debugging difficultly and reading these types of functions.
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 2,

    // There are three primitive types in JavaScript that have wrapper objects:
    // string, number, and boolean. Although possible, there aren't any good
    // reasons to use these primitive wrappers as constructors. They tend to
    // confuse other developers more than anything else because they seem like
    // they should act as primitives, but they do not.
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 2,

    // The leading zero to identify an octal literal has been a source of
    // confusion and error in JavaScript. ECMAScript 5 deprecates the use of
    // octal numeric literals in JavaScript and octal literals cause syntax
    // errors in strict mode.
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 2,

    // As of version 5 of the ECMAScript specification, octal escape sequences
    // are a deprecated feature and should not be used. It is recommended that
    // Unicode escapes be used instead.
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 2,

    // Assignment to variables declared as function parameters can be misleading
    // and lead to confusing behavior, as modifying function parameters will
    // also mutate the arguments object. Often, assignment to function
    // parameters is unintended and indicative of a mistake or programmer error.
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 2,

    // The `__proto__` property has been deprecated as of ECMAScript 3.1 and
    // shouldn't be used in the code. Use getPrototypeOf method instead.
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 2,

    // In JavaScript, it's possible to redeclare the same variable name using
    // `var`. This can lead to confusion as to where the variable is actually
    // declared and initialized. Just don't do it.
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 2,

    // Having an assignment expression in a `return` statement results in
    // confusion, since nothing assigned will likely escape the function. Maybe
    // it was intended to be a comparison. Maybe it wasn't intended at all.
    // Just avoid the confusion entirely by forbidding this strange practice.
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 2,

    // Basically another form of `eval`.
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 2,

    // The only time you would compare a variable against itself is when you are
    // testing for NaN. Use `Number.isNaN` or similar instead.
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 2,

    // The comma operator includes multiple expressions where only one is
    // expected. It evaluates each operand from left to right and returns the
    // value of the last operand. However, this frequently obscures side
    // effects, and its use is often an accident.
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 2,

    // Always want to throw `Error` objects for stack traces.
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 2,

    // The `with` keyword is evil second only to `eval`. Another source of
    // confusing bugs and excellent way to defeat static analyzers.
    // http://eslint.org/docs/rules/no-with
    // http://stackoverflow.com/questions/61552
    'no-with': 2,

    // Prevent weird behavior from `parseInt`.
    // http://eslint.org/docs/rules/radix
    // http://stackoverflow.com/questions/850341
    'radix': 2,

    // JavaScript's `var` declarations are function-scope, not lexical scope.
    // Ensure that this fact is acknowledged by code.
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 2,

    // Avoid pitfalls when trying to call a just-declared function.
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [2, 'any'],

    // Provide a consistent way of doing comparisons. This way is arguably a
    // more natural way to describe the comparison.
    // http://eslint.org/docs/rules/yoda
    'yoda': 2,
  },
};

if (hasBabel) {
  // Copy existing config to babel variants.
  module.exports.rules['metalab/babel/no-invalid-this'] =
    module.exports.rules['no-invalid-this'];
  // Disable non-babel variants.
  module.exports.rules['no-invalid-this'] = 0;
}
