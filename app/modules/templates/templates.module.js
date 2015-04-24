'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

// Declare module
module.exports = angular.module('app.templates', []);

// Import module files
bulk(__dirname, ['./**/!(*.module).js']);
