/**
 * Created by sulvto on 16-3-7.
 */

var app = angular.module('mainApp', []);
console.log(app);

//app .config(['$routeProvider',function ($routeProvider) {
//    $routeProvider
//        .when('/nav', {
//            templateUrl: 'list.html',
//            controller: 'RouteListCtl'
//        })
//        .when('/list/:id', {
//            templateUrl: 'detail.html',
//            controller: 'RouteDetailCtl'
//        })
//        .otherwise({
//            redirectTo: '/list'
//        });
//}]);

app.directive('mainNav', function () {

    return {
        restrict: 'A',
        templateUrl: 'static/view/nav.html',
        replace: true
    }
});

app.directive('mainBody', function () {
    return {
        restrict: 'A',
        templateUrl: 'static/view/body.html',
        replace: true
    }
});

//controller
app.controller('mainCtl', function ($scope) {
    console.log("RUN mainCtl");
});