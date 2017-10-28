angular.module('app',['ngRoute']).config(function ($routeProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider.when('/',{
        templateUrl: 'pages/start.html',
        controller: 'startController'
    });


});
