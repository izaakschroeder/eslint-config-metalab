module.exports = {
  plugins: [
    'react',
  ],
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/yannickcr/eslint-plugin-react/docs/rules
  rules: {
    // For ES6 class components and stateless components this isn't necessary.
    'react/display-name': 0,

    // Warn if an element that likely requires a key prop – namely, one present
    // in an array literal or an arrow function expression.
    'react/jsx-key': 2,

    // Don't be super-pedantic about requiring sorted propTypes. There may be
    // logical orderings that are not alphabetical.
    'react/jsx-sort-prop-types': 0,

    // The normal JSX pragma is `React.createElement`. When preferring explicit
    // imports à la `import { ... } from 'react';` it makes more sense to alias
    // the pragma to `createElement`. This results, roughly, in:
    // `import { Component, createElement, ... } from 'react';`
    'react/jsx-uses-react': 2,

    // Updating the state after a component mount will trigger a second render()
    // call and can lead to property/layout thrashing.
    'react/no-did-mount-set-state': [2, 'allow-in-func'],

    // Updating the state after a component update will trigger a second
    // render() call and can lead to property/layout thrashing.
    'react/no-did-update-set-state': 2,

    // Prevent one file from having more than one component. In general, one
    // component per file allows for strong isolation, easier testing and
    // easier stubbing/mocking. For the cases in which truly private sub-
    // components are needed, they can be provided as class methods on class
    // components or as closures in stateless components. This is intentionally
    // a little obtuse to encourage the minimum component "unit" being able to
    // stand on and be tested on its own.
    'react/no-multi-comp': 2,

    // In JSX all DOM properties and attributes should be camelCased to be
    // consistent with standard JavaScript style. This can be a possible source
    // of errors if you are used to write plain HTML.
    'react/no-unknown-property': 2,

    // This is turned off in favor of using `flowtype` to annotate stateless
    // function components. If your project is heavy on non-stateless components
    // then you shoud turn this on.
    'react/prop-types': 0,

    // Ensure that whatever is creating JSX elements (i.e. `createElement`)
    // is actually imported into the file.
    'react/react-in-jsx-scope': 2,

    // Provide consistent ordering for class-style React component properties.
    'react/sort-comp': [2, {
      order: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^on.+$/',
        '/^handle.+$/',
        '/^get.+$/',
        '/^update.+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
  },
};
