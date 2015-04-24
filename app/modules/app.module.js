'use strict';

var angular = require('angular');

// Angular modules
require('angular-ui-router');

// App modules
// TODO: replace with correct bulk-require pattern
var bulk = require('bulk-require');
bulk(__dirname, ['./**/!(app).module.js']);

// Create and bootstrap application
angular.element(document).ready(startApp);

function startApp() {

    var requires = [
        // Angular modules
        'ui.router',

        // App modules
        'app.demo',
        'app.templates'
    ];

    // Mount on window for testing
    window.app = angular.module('app', requires);

    angular.bootstrap(document, ['app']);

}
