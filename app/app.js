'use strict';

angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
  .config(function ($stateProvider, $locationProvider, $ocLazyLoadProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "./home/home.html",
        controller: 'homeCtrl',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('./home/home.js');
          }]
        }
      })
      .state("about", {
        url: "/about",
        templateUrl: "./about/about.html",
        controller: 'aboutCtrl',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('./about/about.js');
          }]
        }
      })
  });
