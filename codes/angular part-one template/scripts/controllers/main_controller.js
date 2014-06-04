'use strict';

angular.module('orderMasterApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.help_order = function () {
            $location.path('/order_details')
        }
        $scope.get_order = function () {
            $location.path('/show_orders')
        }
    });
