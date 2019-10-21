app.controller('detalleController', ['$scope','$http','$routeParams', 
                                 function($scope,$http,$routeParams ){
        console.trace('detalleController');
        $scope.name=$routeParams.id;
       


        $scope.pokemons1 = [];
        $scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon/"+$scope.name;
        

        $http.get($scope.ENDPOINT)
        .then(function(response){   // success antiguo

            console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
            $scope.pokemons1 = response.data;

            

        }, function(response){    // gestion del error

            console.warn('Tenemos un ERROR response: %o' , response);
            
        });
        

        
}]);