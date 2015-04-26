'use strict';

var angular = require('angular');
var bulk = require('bulk-require');
var appConfig = require('./app.config.js');

// Angular modules
require('angular-ui-router');

// App modules
bulk(__dirname, ['./**/!(app.module).js']);

// Create and bootstrap application
angular.element(document).ready(startApp);

function startApp() {

    var requires = [
        // Angular modules
        'ui.router',

        // App modules
        'app.core',
        'app.404',
        'app.demo'
    ];

    // Mount on window for testing
    window.app = angular
        .module('app', requires)
        .constant('appConfig', appConfig.constants)
        .config(appConfig.routes);

    angular.bootstrap(document, ['app']);

}
