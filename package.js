Package.describe({
  name: 'meteor-node-forge',
  version: '0.6.35',
  // Brief, one-line summary of the package.
  summary: 'JavaScript implementations of network transports, cryptography, ciphers, PKI, message digests, and various utilities.', // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  node-forge: '0.6.35'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('meteor-node-forge.js');
  api.export('forge');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-node-forge');
  api.addFiles('meteor-node-forge-tests.js');
});
