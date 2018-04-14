module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/yannickcr/eslint-plugin-react/docs/rules
  rules: {
    // For ES6 class components and stateless components this isn't necessary.
    'metalab/react/display-name': 0,

    // Warn if an element that likely requires a key prop – namely, one present
    // in an array literal or an arrow function expression.
    'metalab/react/jsx-key': 2,

    // Don't be super-pedantic about requiring sorted propTypes. There may be
    // logical orderings that are not alphabetical.
    'metalab/react/jsx-sort-prop-types': 0,

    // The normal JSX pragma is `React.createElement`. When preferring explicit
    // imports à la `import { ... } from 'react';` it makes more sense to alias
    // the pragma to `createElement`. This results, roughly, in:
    // `import { Component, createElement, ... } from 'react';`
    'metalab/react/jsx-uses-react': 2,

    // Updating the state after a component mount will trigger a second render()
    // call and can lead to property/layout thrashing.
    'metalab/react/no-did-mount-set-state': 2,

    // Updating the state after a component update will trigger a second
    // render() call and can lead to property/layout thrashing.
    'metalab/react/no-did-update-set-state': 2,

    // In general, one component per file allows for strong isolation, easier
    // testing and easier stubbing/mocking. This strategy is alright for full
    // class components but becomes annoying when dealing with stateless
    // components or indeed any small utility functions you have for generating
    // some set components you need (e.g. an iterator for a map call). Overall
    // this winds up being more a hinderance than a help.
    'metalab/react/no-multi-comp': 0,

    // In JSX all DOM properties and attributes should be camelCased to be
    // consistent with standard JavaScript style. This can be a possible source
    // of errors if you are used to write plain HTML.
    'metalab/react/no-unknown-property': 2,

    // Stateless components are generally preferable because they're easier
    // to reason about, simpler to write and (eventually) more performant.
    'metalab/react/prefer-stateless-function': 0,

    // This is turned off in favor of using `flowtype` to annotate stateless
    // function components. If your project is heavy on non-stateless components
    // then you shoud turn this on.
    'metalab/react/prop-types': 0,

    // Ensure that whatever is creating JSX elements (i.e. `createElement`)
    // is actually imported into the file.
    'metalab/react/react-in-jsx-scope': 2,

    // Let people order properties however they want.
    'metalab/react/sort-comp': 0,
  },
};
