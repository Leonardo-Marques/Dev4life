angular.module('app').controller('matchesController', function ($scope, $rootScope, $http, $location) {

    if($rootScope.summoner === undefined){
        $location.path( "/" );
    }

    $rootScope.role = "";
    $scope.hasError = false;
    $scope.errorMsg = false;
    $scope.loading = true;

    console.log($rootScope.summoner);
    $scope.summoner = $rootScope.summoner;

    $http.get("http://localhost:4040/summoner/" + $rootScope.summoner)
        .then(function (response) {
            $scope.matches = response.data.matches;
            $scope.loading = false;
            $scope.profileIcon = response.data.summoner.profileIcon;
            $scope.summonerName = response.data.summoner.name;
            $rootScope.summonerLevel = response.data.summoner.summonerLevel;
            $scope.summonerLevel = $rootScope.summonerLevel
            $scope.role = response.data.summoner.role;
        }).catch(function (response) {
        $scope.hasError = true;
        $scope.hasMsg = "Summoner não encontrado";
        $scope.loading = false;
    });

    $scope.convertTimestampToDate = function (match) {
        var date = new Date(match.timestamp)
        var minutes = date.getMinutes()
        var day = date.getDate()
        var month = date.getMonth()
        day = formatDateInput(day)
        minutes = formatDateInput(minutes)
        month = formatDateInput(month)
        var dateString = day + "/" + month + " as " + date.getHours() + ":" + minutes
        match.date = dateString
        return dateString
    }

    $scope.next = function (role) {
        $rootScope.role = role;
        //$location.path( "/tips/"+matchId );
    }

    function formatDateInput(number) {
        if (number < 10) {
            number = "0" + number.toString()
        }
        return number
    }
});
