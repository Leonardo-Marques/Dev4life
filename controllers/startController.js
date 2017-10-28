angular.module('app').controller('startController', function($scope, $rootScope, $http, $location) {

    $scope.summoner = "";

    $scope.next = function (summoner) {
        $rootScope.summoner = summoner;
        $location.path( "/matches" );
    }

});
