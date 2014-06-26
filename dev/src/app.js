'use strict';
/* App Module */
var RouteProvider = (function () {
    function RouteProvider() {
    }
    RouteProvider.prototype.init = function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'partials/project-list.html',
            controller: 'ProjectListCtrl'
        }).when('/projects/:phoneId', {
            templateUrl: 'partials/project-detail.html',
            controller: 'ProjectDetailCtrl'
        }).when('/about', {
            templateUrl: 'partials/project-detail.html',
            controller: 'ProjectDetailCtrl'
        }).when('/contact', {
            templateUrl: 'partials/project-detail.html',
            controller: 'ProjectDetailCtrl'
        }).otherwise({
            redirectTo: '/projects'
        });
    };
    return RouteProvider;
})();

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

var routeProvider = new RouteProvider();

phonecatApp.config(['$routeProvider', routeProvider.init]);
//# sourceMappingURL=app.js.map
