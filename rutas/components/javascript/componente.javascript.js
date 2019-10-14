angular.
  module('angularApp').  
  component('componenteJavascript', {   
    templateUrl: './components/javascript/template.javascript.html',
    controller: function MenuController($scope,$http) {

      console.trace('JavascriptController');  
      

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
                      $scope.nombr2e  = response.data.filter(e=>e.precio>2).map(l=>l.nombre);
                      $scope.totalEuros  = response.data.map(e=>e.precio).reduce((pv,cv)=> pv+cv);

                  }, function(response){    // gestion del error
      
                      console.warn('Tenemos un ERROR response: %o' , response);
                     
      
                  });

                  
       ['verde','verde','marron'].filter((v,i,a)=>a.indexOf(v)===i);
        var lucky = ['verde','verde','marron'].filter(function(v,i,a) {
          return a.indexOf(v)===i;
        });
      


    }// controlador






  });