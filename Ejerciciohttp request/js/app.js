(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', '$timeout', function($scope,$http,$timeout){
  
  $scope.profesores={};//definimos la variable de profesores

  //piticion httprequest mediante ajax, es ASINCRONA!!
  console.debug('llamada asincrona');


        $timeout(function() {
            $http.get('json/profesores.json').success(function(data){
                console.trace('response ok %o', data)
                    $scope.profesores=data;
                
                  })
        }, 2000);


  console.debug('seguimos ejecutando otra sentencia');


  $scope.localisame = function(){

    console.trace('click localisame');
    $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function(respuesta){
        console.trace('response ok %o', respuesta)
            $scope.datos=respuesta;
            $scope.initMap();
        
          })
  }

  $scope.initMap = function() {

    console.trace('initMap');
    var myLatLng = { 
                        lat: +$scope.datos.geoplugin_latitude, 
                        lng: +$scope.datos.geoplugin_longitude
                    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Estas en " + $scope.datos.geoplugin_city
    });

}; // initMap


}]);





})();
