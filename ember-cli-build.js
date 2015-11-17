/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    app.import('bower_components/blueimp-md5/js/md5.js');
  });

  return app.toTree();
};
