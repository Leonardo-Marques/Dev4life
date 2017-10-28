angular.module('app').controller('tipsController', function($scope, $rootScope, $routeParams, $http, $location) {

  $scope.matchId = $routeParams.idMatch
  $scope.summoner = $rootScope.summoner;

  $http.get("http://localhost:4040/match/"+$scope.matchId)
      .then(function (response) {
          $scope.match = response.data;
          $scope.match.participantIdentities.forEach(function(participant){
            console.log("api name: " + participant.player.summonerName)
            console.log("this name: " + $scope.summoner)
            if(participant.player.summonerName.toUpperCase() == $scope.summoner.toUpperCase()){
              $scope.participantId = participant.participantId
            }
          })
      })

});
