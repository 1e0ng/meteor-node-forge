Package.describe({
  name: 'lsun:meteor-node-forge',
  version: '0.6.35_4',
  // Brief, one-line summary of the package.
  summary: 'A meteor wrapper for node-forge', // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/liangsun/meteor-node-forge',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "node-forge": "0.6.35"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('meteor-node-forge.js', ['server']);
  api.export('forge');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('lsun:meteor-node-forge');
  api.addFiles('meteor-node-forge-tests.js');
});
