app.controller('pokemonController', ['$scope','$http','$routeParams', 
                                 function($scope,$http,$routeParams ){
        console.trace('pokemonController');
        $scope.pokemons = [];
        $scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";


      //  $scope.listar = function(){
            console.trace('click boton listar'); 
            
            $http.get($scope.ENDPOINT)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.pokemons = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);
                
            });
      //  };
        
}]);