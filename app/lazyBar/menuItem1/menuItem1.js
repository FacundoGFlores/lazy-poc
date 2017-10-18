'use strict';

var menuItem1 = angular.module('menuItem1', ['myApp']);

menuItem1.controller("menuItem1Ctrl", function ($scope) {
  $scope.data = "Menu Item 1";
});