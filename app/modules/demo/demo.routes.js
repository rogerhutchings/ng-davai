'use strict';

require('./demo.module.js')
    .config(Routes);

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('Home', {
        url: '/',
        controller: 'ExampleCtrl as home',
        templateUrl: 'demo/home.html',
        title: 'Home'
    });

    $urlRouterProvider.otherwise('/');

}
