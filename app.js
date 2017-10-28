angular.module('app',['ngRoute']).config(function ($routeProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider.when('/',{
        templateUrl: 'pages/start.html',
        controller: 'startController'
    })
    .when('/matches',{
        templateUrl: 'pages/matches.html',
        controller: 'matchesController'
    })
    .when('/tips/:idMatch?',{
        templateUrl: 'pages/tips.html',
        controller: 'tipsController'
    }).otherwise({
        redirectTo: '/'
    });
});
