/* javascript para nuestra App */

var app = angular.module(
    'frutasJsonApp', // nombre de la App
    []             // para inyectar librerias
 );



 app.controller( 'frutasController', ['$scope', 'orderByFilter', function($scope, orderBy){  

    $scope.total = 0;
    $scope.frutaSeleccionada = "";
    $scope.columna = "columna";
    $scope.reverse = "orden";

    $scope.frutasJson = {"frutas": [
        {
            "nombre":"Manzana",
            "color":"verde",
            "precio":2.33,
            "cantidad":0,
            "image":"images/manzana.jpg"
        },
        {
            "nombre":"Pera",
            "color":"verde",
            "precio":1.20,
            "cantidad":0,
            "image":"images/pera.jpg"
        },
        {
            "nombre":"Kiwi",
            "color":"marron",
            "precio":0.99,
            "cantidad":0,
            "image":"images/kiwi.jpg"
        }
    ]};
    
    $scope.incrementar = function(fruta){
        console.trace('click boton sumar: %o', fruta);
        fruta.cantidad++; 
    };

    $scope.decrementar = function(fruta){
        console.trace('click boton sumar: %o', fruta);
        if(fruta.cantidad>0){
            fruta.cantidad--; 
        }
        
    };
   

     $scope.sumar = function(fruta){
        console.trace('click boton sumar');
        $scope.total = fruta.precio * fruta.cantidad;
       
    };   
    $scope.resetear = function(){
        console.trace('click boton resetear');
        $scope.total = 0;
    };      
    
    $scope.ordenar = function(precio){
        console.trace('click boton ordenar');
 
        $scope.columna ='precio'; 
        $scope.orden =!orden
    };


    $scope.propertyName = 'age';
    $scope.reverse = true;
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
  
    $scope.sortBy = function(propertyName) {
      $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
          ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
      $scope.frutasJson = orderBy(frutasJson, $scope.propertyName, $scope.reverse);
    };
    }]);
// end frutasController
