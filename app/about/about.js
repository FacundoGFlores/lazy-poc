'use strict';

var about = angular.module('about', ['myApp']);

about.controller("aboutCtrl", function ($scope) {
  $scope.greeting = "About scope!";
});