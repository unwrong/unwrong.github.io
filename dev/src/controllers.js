'use strict';
/* Controllers */
// RouteProvider defaults us to PhoneListCtrl & associates phone-list.html as the view.
var ProjectListCtrl = (function () {
    function ProjectListCtrl() {
        var _this = this;
        this.init = function ($scope, Project) {
            // create a "projects" property on the view, containing the query data.
            $scope.projects = Project.query();
            $scope.orderProp = 'age';

            $scope.overState = _this.overState;
            $scope.defaultState = _this.defaultState;
        };
        this.overState = function (id) {
            var element = _this.getObj(id + '-inner');
            element.style.backgroundColor = '#E1E1E1';

            _this.show(id + '-details');
            _this.hide(id + '-title');
        };
        this.defaultState = function (id) {
            var element = _this.getObj(id + '-inner');
            element.style.backgroundColor = '#FAFAFA';

            _this.hide(id + '-details');
            _this.show(id + '-title');
        };
    }
    ProjectListCtrl.prototype.getObj = function (id) {
        if (document.getElementById) {
            return document.getElementById(id);
        } else if (document.all) {
            return document.all[id];
        }
        //else if (document.layers) {
        //    return document.layers[name];
        //}
    };

    ProjectListCtrl.prototype.hide = function (id) {
        try  {
            var obj = this.getObj(id);
            obj.style.visibility = 'hidden';
        } catch (e) {
        }
    };
    ProjectListCtrl.prototype.show = function (id) {
        try  {
            var obj = this.getObj(id);
            obj.style.visibility = 'visible';
        } catch (e) {
        }
    };
    return ProjectListCtrl;
})();

var ProjectDetailCtrl = (function () {
    function ProjectDetailCtrl() {
    }
    ProjectDetailCtrl.prototype.init = function ($scope, $routeParams, Project) {
        this._scope = $scope;

        $scope.phone = Project.get({ projectId: $routeParams.phoneId }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    };
    return ProjectDetailCtrl;
})();

var projectListCtrl = new ProjectListCtrl();
var projectDetailCtrl = new ProjectDetailCtrl();

var controllers = angular.module('phonecatControllers', []);
controllers.controller('ProjectListCtrl', ['$scope', 'Project', projectListCtrl.init]);
controllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project', projectDetailCtrl.init]);
//# sourceMappingURL=controllers.js.map
