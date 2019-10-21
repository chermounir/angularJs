angular.
  module('angularApp').  
  component('componenteMenu', {   
    templateUrl: './components/menu/template.menu.html',
    controller: function MenuController($scope) {

      console.trace('MenuController');  
     
      $scope.rutas = [
        {
          "nombre": "Inicio",
          "url": "#!/",
          "active": false,
          "icono": "fas fa-home"
        },
        {
          "nombre": "Frutas",
          "url": "#!/frutas",
          "active": true,
          "icono": "fas fa-carrot"
        },
        {
          "nombre": "Componentes",
          "url": "#!/componente1",
          "active": false,
          "icono": "fas fa-window-restore"
        },       
        {
          "nombre": "Filter, Map, Reduce",
          "url": "#!/filter-map-reduce",
          "active": false,
          "icono": "fab fa-js-square"
        },       
        {
          "nombre": "Contratos",
          "url": "#!/contratos",
          "active": false,
          "icono": "fas fa-file-contract"
        },       
        {
          "nombre": "Promesas",
          "url": "#!/promesas",
          "active": false,
          "icono": "fas fa-pray"
        },       
        {
          "nombre": "Servicios",
          "url": "#!/servicios",
          "active": false,
          "icono": "fab fa-servicestack"
        },       
        {
          "nombre": "Crud",
          "url": "#!/crud",
          "active": false,
          "icono": "fas fa-server"
        },       
        {
          "nombre": "Formulario",
          "url": "#!/formulario",
          "active": false,
          "icono": "fab fa-wpforms"
        },       
        {
          "nombre": "Pokemon",
          "url": "#!/pokemon",
          "active": false,
          "icono": "fas fa-smile-beam"
        }
      ];
      
    
      $scope.cambiarActivo = function( ruta ){
        console.trace('click cambiarActivo %o', ruta);

        //desactivar activo a todas las rutas
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        //activar solo sobre la hemos hecho click
        ruta.active = true;

      }//cambiarActivo



    }// controlador

  });