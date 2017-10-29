angular.module('app').controller('tipsController', function ($scope, $rootScope, $routeParams, $http, $location) {

  if ($rootScope.summoner === undefined) {
    $location.path("/");
  }

  $scope.matchId = $routeParams.idMatch
  $scope.summoner = $rootScope.summoner;

  $http.get("http://localhost:4040/match/" + $scope.matchId)
  .then(function (response) {
    $scope.match = response.data;
    $scope.match.participantIdentities.forEach(function (participant) {
      console.log("api name: " + participant.player.summonerName)
      console.log("this name: " + $scope.summoner)
      if ($scope.summoner !== undefined && participant.player.summonerName.toUpperCase().replace(/\s/g, "")  == $scope.summoner.toUpperCase()) {
        $scope.participantId = participant.participantId
      }
    })
    $scope.gameMode = $scope.match.gameMode
    $scope.participant = $scope.match.participants[$scope.participantId - 1]
    $scope.longestTimeSpentLiving = $scope.participant.stats.longestTimeSpentLiving
    var creepHash = $scope.participant.timeline.creepsPerMinDeltas;
    var creepRatio = 0;
    for(var creepKey in creepHash){
      creepRatio = creepRatio + creepHash[creepKey];
    }
    $scope.creepRatio = Number(creepRatio/4).toFixed(2)
    $scope.win = $scope.participant.stats.win
  })

  // $scope.setLongestTimeSpentLiving = function(){
  //   var longestTimeSpentLiving
  //   return longestTimeSpentLiving
  // }

  $scope.setFarmRatio = function(){

  }

});
