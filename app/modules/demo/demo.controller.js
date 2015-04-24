'use strict';

var module = require('./demo.module.js');

/**
 * @ngInject
 */
function ExampleCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

module.controller('ExampleCtrl', ExampleCtrl);
