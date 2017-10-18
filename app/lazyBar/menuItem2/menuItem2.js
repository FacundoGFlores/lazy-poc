'use strict';

var menuItem2 = angular.module('menuItem1', ['myApp']);

menuItem2.controller("menuItem2Ctrl", function ($scope) {
  $scope.data = "Menu Item 2";
});