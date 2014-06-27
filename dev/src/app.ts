'use strict';

/* App Module */

class RouteProvider {
    public init($routeProvider) {
        $routeProvider.
            when('/projects', {
                templateUrl: 'partials/project-list.html',
                controller: 'ProjectListCtrl'
            }).
            when('/projects/:phoneId', {
                templateUrl: 'partials/project-detail.html',
                controller: 'ProjectDetailCtrl'
            }).
            when('/about', {
                templateUrl: 'partials/project-detail.html',
                controller: 'ProjectDetailCtrl'
            }).
            when('/contact', {
                templateUrl: 'partials/project-detail.html',
                controller: 'ProjectDetailCtrl'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }
}

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  //'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

var routeProvider: RouteProvider = new RouteProvider();

phonecatApp.config(['$routeProvider', routeProvider.init]);
