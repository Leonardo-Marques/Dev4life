angular.module('app').controller('matchesController', function ($scope, $rootScope, $http, $location) {

    if($rootScope.summoner === undefined){
        $location.path( "/" );
    }

    $scope.hasError = false;
    $scope.errorMsg = false;

    console.log($rootScope.summoner);
    $scope.summoner = $rootScope.summoner;

    $http.get("http://localhost:4040/summoner/" + $rootScope.summoner)
        .then(function (response) {
            $scope.matches = response.data.matches;
        }).catch(function (response) {
        $scope.hasError = true;
        $scope.hasMsg = "Summoner não encontrado";
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

    function formatDateInput(number) {
        if (number < 10) {
            number = "0" + number.toString()
        }
        return number
    }
});
