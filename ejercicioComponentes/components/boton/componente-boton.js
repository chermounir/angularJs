angular.
  module('componentesApp').// nombre App
  component('componenteBoton', {// nombre componente => para usarlo <saludoUsuario></saludoUsuario>
    templateUrl: './components/boton/template.html',
    controller: function GreetUserController() {
      this.nombre = 'Mundo';
      this.contador=0;

      //funcion
      this.sumar = function(){

        console.trace('clikc sumar');
        this.contador++;
      }

    }
  });