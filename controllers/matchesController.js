angular.module('app').controller('matchesController', function($scope, $rootScope, $http, $location) {

  console.log($rootScope.summoner);

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

  $scope.matches ={
    "matches": [
        {
            "lane": "BOTTOM",
            "gameId": 1209622786,
            "champion": 59,
            "platformId": "BR1",
            "timestamp": 1507693016645,
            "queue": 430,
            "role": "DUO_SUPPORT",
            "season": 9
        },
        {
            "lane": "MID",
            "gameId": 1209464406,
            "champion": 17,
            "platformId": "BR1",
            "timestamp": 1507691176991,
            "queue": 65,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "TOP",
            "gameId": 1202558548,
            "champion": 24,
            "platformId": "BR1",
            "timestamp": 1506923686519,
            "queue": 400,
            "role": "SOLO",
            "season": 9
        },
        {
            "lane": "MID",
            "gameId": 1202477568,
            "champion": 420,
            "platformId": "BR1",
            "timestamp": 1506921591771,
            "queue": 65,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "BOTTOM",
            "gameId": 1202541588,
            "champion": 516,
            "platformId": "BR1",
            "timestamp": 1506918364981,
            "queue": 400,
            "role": "DUO",
            "season": 9
        },
        {
            "lane": "MID",
            "gameId": 1202383753,
            "champion": 268,
            "platformId": "BR1",
            "timestamp": 1506905567465,
            "queue": 315,
            "role": "SOLO",
            "season": 9
        },
        {
            "lane": "BOTTOM",
            "gameId": 1197238999,
            "champion": 78,
            "platformId": "BR1",
            "timestamp": 1506359887241,
            "queue": 400,
            "role": "DUO_SUPPORT",
            "season": 9
        },
        {
            "lane": "BOTTOM",
            "gameId": 1197085050,
            "champion": 85,
            "platformId": "BR1",
            "timestamp": 1506309187648,
            "queue": 400,
            "role": "DUO_SUPPORT",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1195302192,
            "champion": 134,
            "platformId": "BR1",
            "timestamp": 1506168558089,
            "queue": 990,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "BOTTOM",
            "gameId": 1195298925,
            "champion": 81,
            "platformId": "BR1",
            "timestamp": 1506166898961,
            "queue": 400,
            "role": "DUO_CARRY",
            "season": 9
        },
        {
            "lane": "MID",
            "gameId": 1195224752,
            "champion": 82,
            "platformId": "BR1",
            "timestamp": 1506138873916,
            "queue": 400,
            "role": "SOLO",
            "season": 9
        },
        {
            "lane": "MID",
            "gameId": 1195205813,
            "champion": 245,
            "platformId": "BR1",
            "timestamp": 1506137061185,
            "queue": 400,
            "role": "SOLO",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1193877308,
            "champion": 103,
            "platformId": "BR1",
            "timestamp": 1506009773075,
            "queue": 990,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1193208974,
            "champion": 78,
            "platformId": "BR1",
            "timestamp": 1505926002335,
            "queue": 990,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1193165579,
            "champion": 222,
            "platformId": "BR1",
            "timestamp": 1505916199607,
            "queue": 980,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "BOTTOM",
            "gameId": 1192908466,
            "champion": 78,
            "platformId": "BR1",
            "timestamp": 1505884425073,
            "queue": 400,
            "role": "DUO_SUPPORT",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1192906919,
            "champion": 40,
            "platformId": "BR1",
            "timestamp": 1505883048919,
            "queue": 990,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1192074481,
            "champion": 40,
            "platformId": "BR1",
            "timestamp": 1505789152123,
            "queue": 980,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1191517087,
            "champion": 222,
            "platformId": "BR1",
            "timestamp": 1505743675582,
            "queue": 990,
            "role": "NONE",
            "season": 9
        },
        {
            "lane": "JUNGLE",
            "gameId": 1191514619,
            "champion": 222,
            "platformId": "BR1",
            "timestamp": 1505742239651,
            "queue": 980,
            "role": "NONE",
            "season": 9
        }
    ],
    "endIndex": 20,
    "startIndex": 0,
    "totalGames": 142
}

});
