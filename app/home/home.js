'use strict';

var home = angular.module('home', ['myApp']);

home.controller("homeCtrl", function ($scope) {
  $scope.greeting = "Hello world!";
});