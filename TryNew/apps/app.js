/**
 * Created by Zhihao on 2015/8/17.
 */
angular.module('myApp', [])
    .controller('Controller', ['$scope', function($scope) {
        $scope.name = 'controller';
    }])
    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'my-dialog.html',
            link: function (scope, element) {
                scope.name = 'link';
            }
        };
    });