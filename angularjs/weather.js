angular.module('weatherdata', [])
.controller('cwd',function($scope, $http){
$http.get("http://api.openweathermap.org/data/2.5/weather?q=Pune,India&appid=b1b15e88fa797225412429c1c50c122a")
.then(function(response)
{console.log(response);
$scope.wd=response.data;
});
});

