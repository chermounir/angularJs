app.controller('crudController', ['$scope', 'cancionProvider', 
                                 function($scope, cancionProvider){


    console.trace('crudController');

    // variables del scope del controlador
    $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";
    $scope.canciones = [];
    $scope.alerta = {};
    // Eventos
    this.$onInit = function(){
        console.trace('crudController onInit'); 

        /*
        TODO ponerlo donde sea neceario
        cancionProvider.listar();
        cancionProvider.detalle(1);
        cancionProvider.eliminar(2);
        cancionProvider.crear("Mockito");
        cancionProvider.modificar(1,"Cambiada Cancion 1");
        */

       $scope.refrescar();
    } 
        $scope.refrescar = function(){
            let promesa = cancionProvider.listar();           
            promesa.then( 
                response=>{
                    console.debug('Llamada Rest OK %o', response);
                    $scope.canciones = response.data;
                },
                response=>{
                    console.warn('Llamada Rest ERROR %o', response);
                }
            );//listar 
        }
        
        $scope.crear = function(nombre){
                console.trace('click boton crear' );

                let promesa = cancionProvider.crear(nombre);           
                promesa.then(function(response){   // success antiguo

                console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
                
                $scope.refrescar();
                $scope.nombre = "";
                $scope.alerta = {
                    "texto" : "registro guardado",
                    "clase" : "success"
                  };

            }, function(response){    // gestion del error

             console.warn('Tenemos un ERROR response: %o' , response);
             $scope.alerta = {
                "texto" : "no se ha podido guardar el registro",
                "clase" : "danger"
              };
            

            });
        }// crear

        $scope.eliminar = function(id){
            console.trace('click boton eliminar' );
            if ( confirm('¿Estas seguro que quieres Eliminar?') ){
            let promesa = cancionProvider.eliminar(id);           
            promesa.then(function(response){   // success antiguo

            console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
            $scope.refrescar();
            $scope.alerta = {
                "texto" : "registro eliminado",
                "clase" : "success"
              };

        }, function(response){    // gestion del error

         console.warn('Tenemos un ERROR response: %o' , response);
         $scope.alerta = {
            "texto" : "no se ha podido eliminar el registro",
            "clase" : "danger"
          };

        });
    }
    }// eliminar  

        $scope.modificar = function(id, nombre){
            console.trace('click boton modificar' );
//ventana pop-up de confirmacion
//if ( confirm('¿Estas seguro que quieres Modificar?') ){

            $scope.mostrarEditar=true;

            let promesa = cancionProvider.modificar(id,nombre);           
            promesa.then(function(response){   // success antiguo

            console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
            $scope.refrescar();
            $scope.alerta = {
                "texto" : "registro modificado con exito",
                "clase" : "success"
              };

        }, function(response){    // gestion del error

        console.warn('Tenemos un ERROR response: %o' , response);
        $scope.alerta = {
            "texto" : "no se ha podido modificar el registroo",
            "clase" : "danger"
          };
        });
  //  }
    }// modificar  
    
    // funciones


}]);