angular.
  module('angularApp').  
  component('componenteContratos', {   
    templateUrl: './components/contratos/template.contratos.html',
    controller: function ContratosController($scope,$http) {

      console.trace('ContratosController');  
       
  
      
    
      $scope.contratos = [];
      $scope.contratosTipProduct = [];
      $scope.nuevoArrayContratos = [];
      $scope.contratosSituacion = [];
      $scope.contratosSituacion1 = [];
     
      let url = 'http://localhost:3000/contratos';
      $http.get(url)
                  .then(function(response){   // success antiguo
      
                      console.trace('peticion GET %s data=%o', url, response);
                      $scope.contratos = response.data;
                      
                      $scope.contratosTipProduct  = response.data.filter(e=>e.TIPPRODUCT=='KT');
                      
                      $scope.nuevoArrayContratos = response.data.map(function(obj){ 
                        var rObj = {};
                       // if(angular.isDefined(obj.codContrat)){
                        //  obj.codContrat='';
                        //  }
                        //  if(angular.isDefined(obj.digContrat)){
                       //     obj.digContrat='';
                         // }
                            rObj['contrato'] = obj.codContrat+'-'+obj.digContrat;//codCONTRAT y digContrat
                            rObj['saldo'] = (obj.SALCONTRAT)/100 ;//codCONTRAT y digContrat

                            return rObj;
                        
                        
                        
                     });
                     //let contratosSituacion1  = response.data.filter(e=>e.ACCIONES!='');
                     $scope.contratosSituacion  = response.data.filter( v =>{

                      if ( v.ACCIONES != undefined ){
           
                        return  v.ACCIONES.filter( e => e.clave == "SITUACION" ).length === 1 ;
                           
                      }else{
                          return false;
                      }
                       
                   });

                   //https://github.com/anderuraga/AngularJSEjercicios/blob/master/rutas/js/contratosController.js

                  }, function(response){    // gestion del error
      
                      console.warn('Tenemos un ERROR response: %o' , response);
                     
      
                  });



    }// controlador






  });