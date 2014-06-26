'use strict';
/* Services */
var Project = (function () {
    function Project() {
    }
    Project.prototype.init = function ($resource) {
        return $resource('projects/:projectId.json', {}, {
            query: { method: 'GET', params: { projectId: 'projects' }, isArray: true }
        });
    };
    return Project;
})();

var project = new Project();

var services = angular.module('phonecatServices', ['ngResource']);
services.factory('Project', ['$resource', project.init]);
//# sourceMappingURL=services.js.map
