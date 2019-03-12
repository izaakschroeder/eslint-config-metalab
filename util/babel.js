var resolve = require('resolve');
var chalk = require('chalk');

// TODO: This should resolve to the root package.json of the project.
var basedir = module.paths[0];

exports.hasPrettier = function() {
  // Determine if we are using prettier or not.
  try {
    resolve.sync('prettier', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load prettier then stop caring.
  }
  return false;
};

exports.hasTypescript = function() {
  // Determine if we are using typescript or not.
  try {
    resolve.sync('typescript', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load prettier then stop caring.
  }
  return false;
};

exports.hasBabel = function() {
  // Determine if we are using babel 7+ or not.
  try {
    resolve.sync('@babel/core', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load babel then stop caring.
  }
  // Determine if we are using babel 6 or not.
  try {
    resolve.sync('babel-core', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load babel then stop caring.
  }
  return false;
};

exports.hasBabelResolver = function() {
  var message;
  // Determine if we are using babel resolver or not.
  try {
    resolve.sync('babel-plugin-module-resolver', {
      basedir: basedir,
    });
    require('babel-plugin-module-resolver');
    return true;
  } catch (err) {
    if (/SyntaxError/.test(err.toString())) {
      if (/v4/.test(process.version)) {
        message = [
          'babel-plugin-module-resolver does not work with node@4\n',
          'See:',
          'https://github.com/tleunen/babel-plugin-module-resolver/pull/222',
        ].join(' ');
        // eslint-disable-next-line no-console
        console.log(chalk.red('error'), message);
        process.exit(1);
      }
    }
  }
  return false;
};
