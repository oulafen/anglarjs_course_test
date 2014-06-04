'use strict';

var myModule = angular.module('orderMasterApp');

myModule.filter('color1', function () {
    return function (food_price) {
        var color = (food_price >= 12) ? 'red' : '';
        return 'color : ' + color;
    };
});