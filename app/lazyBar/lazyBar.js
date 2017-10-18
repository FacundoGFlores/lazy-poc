'use strict';

var lazyBar = angular.module('lazy', ['myApp', 'ui.router']);

lazyBar.config($stateProvider => {
  $stateProvider.state('lazybar', {
    url: '/lazybar',
    template: `
      <h2>Lazy Bar</h2>
      <a ui-sref=".menuItem1">MenuItem1</a><br>
      <a ui-sref=".menuItem2">MenuItem2</a><br>
      <ui-view></ui-view>
    `,
  });

  $stateProvider.state('lazybar.menuItem1', {
    url: '/lazyBar/menuItem1',
    templateUrl: "/lazyBar/menuItem1/menuItem1.html",
    controller: 'menuItem1Ctrl',
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load('/lazyBar/menuItem1/menuItem1.js');
      }]
    }
  });

  $stateProvider.state('lazybar.menuItem2', {
    url: '/lazyBar/menuItem2',
    templateUrl: "/lazyBar/menuItem2/menuItem2.html",
    controller: 'menuItem2Ctrl',
    resolve: {
      loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
        return $ocLazyLoad.load('/lazyBar/menuItem2/menuItem2.js');
      }]
    }
  });
});