var app = angular.module('angularApp',['ngRoute','ngSanitize']);
/**
 * Constantes
 */
app.constant("servicioConstantes",
{
  "titulo":"Servicio",
  "idioma":"ES",
  "version":1.0,
  "autor":"mounir ch",
  "github":"https://github.com/anderuraga?tab=repositories",
});

/**
 * Providers
 */
function CancionProvider($http){

  console.log('CancionProvider');
  const ENDPOINT = "http://localhost:8080/cancion/";

  this.listar = function(){    
    console.log('cancionProvider listar ' + ENDPOINT);
    return $http.get(ENDPOINT);

  }// listar

  this.detalle = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider detalle ' + url);
    
  }// detalle
// eliminar
  this.eliminar = function( idCancion ){    
    let url = ENDPOINT + idCancion ;
    return $http.delete( url )
    console.log('cancionProvider eliminar ' + url);
    
    
  }// eliminar

//crear
  this.crear = function( nombreCancion ){    
    let url = ENDPOINT;
    console.log('cancionProvider nombreCancion ' + url);
    let body ={"id":0,"nombre":nombreCancion};
    return $http.post(url, body);
  }// crear

  this.modificar = function( idCancion, nombreCancion ){    
    let url = ENDPOINT  + idCancion;
    console.log('cancionProvider modificar %s  id=%s nombre=%s', url, idCancion, nombreCancion );
    let body ={"id":idCancion,"nombre":nombreCancion};
    return $http.put(url, body);
  }// modificar


}

 app.service("cancionProvider", CancionProvider );
 //app.service("pokemonProvider", pokemonProvider );
 /**
 * Ejemplo de service
 */

//clase rectangulo

function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

 //definir el servicio

app.service("rectanguloService",Rectangulo);
/**
 * Filtro personalizado para capitalizar le primera letra de un string
 */
//definir filtro en la app
app.filter("capitalizar",function(){
  return function (cadena){
    if(cadena !=undefined && typeof cadena=='string'){
  
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  
    }else{
  
      return "";
  
    }
  }
});

app.filter("capitalizarCacho",function(){
  return function mayusculasFilter(valor,ini,fin) {
   
    if (typeof (valor)==="string") {
       
      if (angular.isNumber(fin-ini) && fin-ini>=0) {
        return valor.substr(0,ini)+valor.substr(ini,fin-ini).toUpperCase()+valor.substr(fin);
      } else {
        return valor.toUpperCase();
      }
       
       
    } else {
      return valor;
    }
  }
});





/**
 * controlador principal
 */

