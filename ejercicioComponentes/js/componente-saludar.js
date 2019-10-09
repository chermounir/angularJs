angular.
  module('componentesApp').// nombre App
  component('saludoUsuario', {// nombre componente => para usarlo <saludoUsuario></saludoUsuario>
    template: 'Hello, {{$ctrl.user}}!',
    controller: function GreetUserController() {
      this.user = 'Mundo';
    }
  });