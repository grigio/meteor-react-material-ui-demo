Package.describe({
  name: 'browserify-deps',
  version: '0.0.1',
});

Npm.depends({
  'upper-case':'1.1.2',
  'react': '0.13.3',
  'material-ui':'0.8.0'
});

Package.onUse(function(api) {
  // add package
  // api.use(['react'], 'client');
  api.use(['cosmos:browserify@0.3.0'], 'client');

  // add browserify file in step #2 with your package's client files
  api.addFiles(['client.browserify.js'], 'client');

  // OPTIONAL: make variable app (global) scoped:
  api.export('uppercase', 'client');
  api.export('React', 'client');
  api.export('mui', 'client');
  api.export('injectTapEventPlugin', 'client');

});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('browserify-deps');
//   api.addFiles('browserify-deps-tests.js');
// });