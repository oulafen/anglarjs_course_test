'use strict';

angular
    .module('orderMasterApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
//            .when('/此处写URL', {
//                templateUrl: '此处写要加载的页面的路径',
//                controller: '此处写控制器，在“order_details_controller.js”文件的第4行可以找到'
//            })
            .when('/name', {
                templateUrl: 'views/name.html',
                controller: 'name'
            })
            .when('/choose_person', {
                templateUrl: 'views/choose_person.html',
                controller: 'ChoosePersonCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
