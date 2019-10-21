
/**
 * Configuracion de las rutas de la App
 * @see components/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })    
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        template: '<componente-frutas></componente-frutas>'
    })
    .when('/filter-map-reduce',{
      template: '<componente-javascript></componente-javascript>'
    })
    .when('/contratos',{
      template: '<componente-contratos></componente-contratos>'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/crud',{
      templateUrl: 'parciales/crud.html'
    })
    .when('/formulario',{
      templateUrl: 'parciales/formulario.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/detalle.html',
      controller:'detalleController'
    }).when('/pokemon',{
      templateUrl: 'parciales/pokemon.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})

