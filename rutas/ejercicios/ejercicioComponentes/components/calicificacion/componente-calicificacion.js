angular.
  module('componentesApp').// nombre App
  component('componenteCalicificacion', {// nombre componente => para usarlo <saludoUsuario></saludoUsuario>
    templateUrl: './components/calicificacion/template.html',
    bindings: {
      pnota: '@'//parametro de entrada
    },
    controller: function CalificacionController() {
      const NOTA_MIN=0;
      const NOTA_MAX=10;
      this.texto = 'suspenso';
      this.nota=5;
//evento para cuando se inicia el controlador
      this.$onInit = function(){
        this.nota=+this.pnota;// el mas es para el parseInt
        this.cambiarTexto();
      }

      //funcion
      this.sumar = function(){

        console.trace('clikc sumar');

        if(this.nota<NOTA_MAX){
          this.nota++;
}
        this.cambiarTexto();
      }

      this.restar = function(){
        console.trace('clikc restar');

        if(this.nota>NOTA_MIN){
                             this.nota--;
        }
        this.cambiarTexto();
      }
      this.cambiarTexto = function(){
            switch(this.nota){
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              this.texto = 'suspenso';
              break;
              case 6:
              case 7:
              case 8:
              case 9:
              this.texto = 'sufisiente';
              break;
              case 10:
              this.texto = 'sobresaliente';
              break;

            }

      }

      

    }
  });