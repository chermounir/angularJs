angular.
  module('angularApp').  
  component('componenteFrutas', {   
    templateUrl: './components/frutas/template.frutas.html',
    controller: function MenuController($scope,$http) {

      console.trace('MenuController');  
     
  
      
    
      $scope.frutas ={};
      $scope.colores ={};
      $scope.nombr2e =[];
      $scope.totalEuros =0;
      let url = 'http://localhost:3000/frutas';
      $http.get(url)
                  .then(function(response){   // success antiguo
      
                      console.trace('peticion GET %s data=%o', url, response);
                      $scope.frutas = response.data;
                      $scope.colores  = response.data.map(e=>e.color);
                      $scope.nombr2e  = response.data.filter(e=>e.precio>2).map(e=>e.nombre);
                      $scope.totalEuros  = response.data.map(e=>e.precio).reduce((pv,cv)=> pv+cv);

                  }, function(response){    // gestion del error
      
                      console.warn('Tenemos un ERROR response: %o' , response);
                     
      
                  });



    $scope.siguientes = function(){
        if($scope.frutas.length >$scope.posicion){
            $scope.posicion +=2;
        }
    }
    $scope.anteriores = function(){
        if($scope.posicion>2){
            $scope.posicion -=2;
        }
    }

      


    }// controlador






  });