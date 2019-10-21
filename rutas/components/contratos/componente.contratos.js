angular.
  module('angularApp').  
  component('componenteContratos', {   
    templateUrl: './components/contratos/template.contratos.html',
    controller: function ContratosController($scope,$http) {

      console.trace('ContratosController');  
       
  
      
      $scope.titulo = "Ejercicio Filter y Map";
      $scope.contratos = [];
      $scope.tiposProductos = [];
      $scope.contratosTipProduct = [];
      $scope.nuevoArrayContratos = [];

      $scope.contratosSituacion = [];
      $scope.contratosSituacion1 = [];
      $scope.allAcciones = [];
     
      let url = 'http://localhost:3000/contratos';
      $http.get(url)
                  .then(function(response){   // success antiguo
      
                      console.trace('peticion GET %s data=%o', url, response);
                      $scope.contratos = response.data;
                      
                      $scope.tiposProductos = $scope.contratos.map(e=>e.TIPPRODUCT).filter((v,i,a) => {
                        return a.indexOf(v) === i;
                   });
                      $scope.contratosTipProduct  = response.data.filter(e=>e.TIPPRODUCT=='KT');
                      

                     $scope.nuevoArrayContratos = $scope.contratos.map( e => {

                      let codContrato = (e.codContrat == undefined) ? "" : e.codContrat.toString() ;
                      let digContrat = (e.digContrat == undefined) ? "" : e.digContrat.toString() ;
                      let cc = codContrato + digContrat;
          
                      return {
                          "codigoContrato" : cc,
                          "saldo": (e.SALCONTRAT / 100)
                      }
          
                  }).filter( e => {
                      return ( e.codigoContrato != "" && e.saldo > 0 ) ;
                  });
                     //let contratosSituacion1  = response.data.filter(e=>e.ACCIONES!='');
                     $scope.contratosSituacion  = response.data.filter( v =>{

                      if ( v.ACCIONES != undefined ){
           
                        return  v.ACCIONES.filter( e => e.clave == "SITUACION" ).length === 1 ;
                           
                      }else{
                          return false;
                      }
                       
                   });

                   $scope.allAcciones = [...new Set( $scope.contratos.map( e => {
                    if (e.ACCIONES){
                     //return e.ACCIONES.titulo
                        
                     return e.ACCIONES.map( v => 
                         { 
                             return  v.titulo 
                         });
                        
                 } 
                 }) )];

                   //https://github.com/anderuraga/AngularJSEjercicios/blob/master/rutas/js/contratosController.js

                  }, function(response){    // gestion del error
      
                      console.warn('Tenemos un ERROR response: %o' , response);
                     
      
                  });



    }// controlador






  });