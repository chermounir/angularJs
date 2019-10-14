
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
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
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
    .otherwise({
      redirectTo: '/'
    })

})
