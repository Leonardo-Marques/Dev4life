angular.module('app').controller('matchesController', function($scope, $rootScope, $http, $location) {

  console.log($rootScope.summoner);

    $http.get("http://localhost:4040/summoner/"+$rootScope.summoner)
        .then(function(response) {
            $scope.matches = response.data.matches;
        });

  $scope.convertTimestampToDate = function(timestamp){
    var date = new Date(timestamp)
    var minutes = date.getMinutes()
    var day = date.getDate()
    var month = date.getMonth()
    day = formatDateInput(day)
    minutes = formatDateInput(minutes)
    month = formatDateInput(month)

    var dateString =  day + "/" + month + " as " + date.getHours() + ":" + minutes
    return dateString
  }

  function formatDateInput(number){
    if(number < 10){
      number = "0" + number.toString()
    }
    return number
  }

});
