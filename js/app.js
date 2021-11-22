(function(){

var app = angular.module('ejemplosApp',[ ]);

//este procedimiento se llama inyeccion
//obtencion de datos externos con http

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.profesores = {};

  $http.get('json/profesores.json').success(function(data){
      //codigo cuando es correcta la peticion
      $scope.profesores = data.profesores;
  });


  



}]);





})();
