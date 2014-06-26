'use strict';

/* Services */

class Project {
    public init($resource) {
        return $resource('projects/:projectId.json', {}, {
            query: { method: 'GET', params: { projectId: 'projects' }, isArray: true }
        });
    }
}

var project: Project = new Project();

var services:ng.IModule = angular.module('phonecatServices', ['ngResource']);
services.factory('Project', ['$resource', project.init]);
